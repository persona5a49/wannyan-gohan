# 選択肢画像 全面監査（2026-09-28）

対象: `public/assets/choice-illustrations/` 配下 全141点 + 参考として `character-parts/breed/`（Q2犬種、既存承認済み）

## 監査方法
- コード（`src/main.js`）から `QUESTIONS` → `CHOICE_ILLUST` → 実ファイルの参照関係を追跡
- 各フォルダから最低1枚を実際に開いて目視確認（korote系ブロブ風・抽象アイコン風・破棄済み体型シルエット風の3系統が混在していることを確認）
- 承認済み資産（Q5〜Q32ヒーロー画像28点、Q2犬種の`character-parts/breed/*`）とは別系統であることをコード上のコメント（2026-09-25追加、価格帯/index対応の事後修正コメントあり）から確認

## 結論
`CHOICE_ILLUST`（Q3・Q6〜Q29・Q31・Q32、127点）は、他の全画像素材（Q5〜Q32ヒーロー28点、Q2犬種、type-guide、ころて等）が経てきた「ChatGPT生成→太郎さん承認→実装」のフローを経ておらず、画風も本体（korote/ヒーロー画像）と不統一。**`CHOICE_ILLUST_APPROVED = false` で本番から即時撤去済み**（`src/main.js`、選択肢はテキスト+ラジオのカードにフォールバック）。

## 棚卸し表（フォルダ単位・同一フォルダ内は同一対応）

| 質問番号 | 質問キー | 質問文 | 選択肢数 | フォルダ | 参照元 | 本番表示 | 正式承認 | 対応 |
|---|---|---|---|---|---|---|---|---|
| Q2 | breedGroup | 体格や犬種の雰囲気で近いものは？ | 10 | `q02_breedGroup/`（10点、コード内で未参照） | なし（実際はBREEDGROUP_CHAR_PREVIEW→`character-parts/breed/*`を使用） | 表示なし | - | LEGACY_UNUSED |
| Q3 | age | 年齢はどのくらいですか？ | 5 | `q03_age/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q5 | body | 上から見た体型・触った感じに近いのは？ | 5 | `q05_body/`（4点） | BODY_OPTION_IMG（`BODY_ASSET_APPROVED=false`で既に無効） | 表示なし（既存対応） | 太郎さんNG（9/25） | HOLD_FOR_NEW_ASSET |
| Q6 | neuter | 避妊・去勢はしていますか？ | 3 | `q06_neuter/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q7 | human | 散歩中、知らない人に声をかけられたら？ | 4 | `q07_human/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q8 | dogs | 向こうから犬が歩いてきたら？ | 4 | `q08_dogs/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q9 | place | 初めての公園や病院の待合室では？ | 4 | `q09_place/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q10 | sound | 雷・工事音・物音がした時は？ | 4 | `q10_sound/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q11 | foodNew | 初めてのフードを少し混ぜたら？ | 4 | `q11_foodNew/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q12 | activity | 何もない日の過ごし方は？ | 4 | `q12_activity/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q13 | excite | 楽しいことが起きた直後は？ | 4 | `q13_excite/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q14 | training | 「待て」「おいで」などの覚え方は？ | 4 | `q14_training/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q15 | persistence | 欲しいものが手に入らない時は？ | 4 | `q15_persistence/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q16 | bond | 家の中で、飼い主との距離感は？ | 4 | `q16_bond/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q17 | alone | 留守番や家族が離れる時は？ | 4 | `q17_alone/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q18 | appetite | いつものごはん時間は？ | 4 | `q18_appetite/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q19 | treats | おやつやごほうびを見ると？ | 4 | `q19_treats/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q20 | stomach | フードを替えた時のお腹は？ | 4 | `q20_stomach/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q21 | stool | 最近の便で近いものは？ | 4 | `q21_stool/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q22 | vomit | 吐く・えずくことは？ | 4 | `q22_vomit/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q23 | waterUrine | 水を飲む量やおしっこの変化は？ | 4 | `q23_waterUrine/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q24 | mouthState | 口・歯の様子は？ | 4 | `q24_mouthState/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q25 | currentFood | 今の主食は？ | 4 | `q25_currentFood/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q27 | treatAmount | おやつの量は？ | 4 | `q27_treatAmount/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q28 | concerns | 今、気になることを選んでください（複数選択） | 8 | `q28_concerns/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q29 | checkup | 健診・治療で気になることは？（複数選択） | 8 | `q29_checkup/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q31 | preference | ごはん選びで重視したいことは？（複数選択） | 6 | `q31_preference/` | CHOICE_ILLUST | 撤去済み | 未承認 | REMOVE_IMAGE |
| Q32 | ownerMbti | 飼い主様のMBTIタイプ | 17 | `q32_ownerMbti/` | CHOICE_ILLUST（各タイプ色分けドットのみ） | 撤去済み | 未承認 | REMOVE_IMAGE |

## 集計
- 旧AI画像（未承認・撤去対象）: **127点**（26フォルダ、Q3・Q6〜Q29・Q31・Q32）
- LEGACY_UNUSED（コード上未参照の孤立ファイル）: 10点（`q02_breedGroup/`）
- HOLD_FOR_NEW_ASSET（太郎さん既存NG、ChatGPT再作成待ち）: 4点（`q05_body/`）
- 削除画像（ファイル自体の削除）: 0点（今回はコードでの表示無効化のみ。ファイル削除はご希望あれば別途対応）
- 正式素材への差替: 0件（今回は未対応・ChatGPT側の正式素材待ち）

## HOLD_FOR_NEW_ASSET 詳細（将来ChatGPT側で作成する場合の参考）
Q5 body（体型、4段階）は既存コードに構図情報が残っています。
- 構図: 上から見た体型シルエット（横向き犬体型ではなく俯瞰）
- 意味: emaciated(かなりやせ)/thin(やや細め)/normal(適正)/chubby(ややぽっちゃり)/obese(肥満)の5段階中4段階（emaciated用は別途要確認）
- 推奨aspect ratio: 正方形(1:1)
- 背景透過: 要（他のkorote系素材と同様）

Q3・Q6〜Q29・Q31・Q32については、今回は「HOLD」ではなく単純に画像なし（テキストのみ）へ戻す判断としました。将来的にChatGPT側で作り直す場合は、既存の`CHOICE_ILLUST`マッピング（`src/main.js`内、value→ファイル名の対応表）がそのまま構図リストとして使えます。
