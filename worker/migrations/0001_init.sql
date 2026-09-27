-- D1 (SQLite) schema for PDF karute automation.
-- Adapted from the original Postgres/Supabase design (SUPABASE_SCHEMA.sql) to SQLite.
-- ids are TEXT (crypto.randomUUID() generated in the Worker, not by the DB).
-- timestamps are TEXT ISO8601 (UTC), set by the Worker at insert/update time.

CREATE TABLE IF NOT EXISTS pdf_orders (
  id TEXT PRIMARY KEY,
  status TEXT NOT NULL DEFAULT 'draft'
    CHECK (status IN (
      'draft','checkout_created','paid','submitted','generating','generated',
      'delivering','delivered','generation_failed','delivery_failed','payment_failed','expired'
    )),
  stripe_checkout_session_id TEXT UNIQUE,
  stripe_payment_intent_id TEXT,
  stripe_price_id TEXT,
  customer_email TEXT,
  amount_total INTEGER,
  currency TEXT,
  diagnosis_version TEXT,
  diagnosis_json TEXT,              -- JSON string, as copied from the free diagnosis result
  -- OCRハイブリッド方式：健診値は「OCR候補」と「購入者確定値」を明確に分離して保持する。
  -- confirmed_labs が埋まるまでPDF生成には使わない（OCR候補だけでは確定値として扱わない）。
  ocr_candidates_json TEXT,         -- OCRが抽出した19項目の候補値＋confidence（購入者確認前の参考情報）
  confirmed_labs_json TEXT,         -- 購入者が確認・修正して確定した19項目の最終値（PDFはこれを一次ソースにする）
  labs_confirmed_at TEXT,
  pdf_storage_path TEXT,
  retry_count INTEGER NOT NULL DEFAULT 0,
  last_error_code TEXT,
  created_at TEXT NOT NULL,
  checkout_created_at TEXT,
  paid_at TEXT,
  submitted_at TEXT,
  generated_at TEXT,
  delivered_at TEXT,
  purge_at TEXT
);

CREATE INDEX IF NOT EXISTS pdf_orders_status_idx ON pdf_orders(status);
CREATE INDEX IF NOT EXISTS pdf_orders_purge_at_idx ON pdf_orders(purge_at);
CREATE INDEX IF NOT EXISTS pdf_orders_session_idx ON pdf_orders(stripe_checkout_session_id);

CREATE TABLE IF NOT EXISTS pdf_order_files (
  id TEXT PRIMARY KEY,
  order_id TEXT NOT NULL REFERENCES pdf_orders(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK (kind IN ('health_check')),
  r2_key TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL CHECK (size_bytes >= 0),
  -- 複数測定日時列を含む検査表の場合の「どの列を採用したか」の記録（購入者確認後に埋める。OCRが単独で確定しない）
  measured_at_label TEXT,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS pdf_order_files_order_id_idx ON pdf_order_files(order_id);

-- D1にはPostgresのRLSに相当する機能がないため、アクセス制御はWorker側のコードで強制する：
--   - service-role的な直接DBアクセスはWorkerのバインディング経由のみ（クライアントに鍵を渡さない）
--   - upload/submitはpaid状態のorderのみ許可（Worker側でstatusチェック）
--   - R2オブジェクトパスは常にサーバー側でorder_id配下に生成し、クライアント指定パスを信用しない
