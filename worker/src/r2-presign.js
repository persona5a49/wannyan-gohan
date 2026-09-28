// R2のS3互換APIに対するAWS SigV4署名付きURLを自前実装する。
// Workers R2バインディングにはpresigned URL発行機能がないため、
// ブラウザ→R2直接アップロード（Workerを画像中継にしない）を実現するにはこの方式が必要。

function hex(buffer) {
  return [...new Uint8Array(buffer)].map(b => b.toString(16).padStart(2, '0')).join('')
}

async function sha256Hex(message) {
  const data = typeof message === 'string' ? new TextEncoder().encode(message) : message
  const digest = await crypto.subtle.digest('SHA-256', data)
  return hex(digest)
}

async function hmac(key, message) {
  const cryptoKey = await crypto.subtle.importKey(
    'raw', typeof key === 'string' ? new TextEncoder().encode(key) : key,
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  )
  return crypto.subtle.sign('HMAC', cryptoKey, new TextEncoder().encode(message))
}

// AWS仕様のURIエンコード（パスセグメント単位。'/'はセグメント区切りとして残す）
function encodeRfc3986(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, c => '%' + c.charCodeAt(0).toString(16).toUpperCase())
}

function encodePath(key) {
  return key.split('/').map(encodeRfc3986).join('/')
}

export async function presignR2PutUrl(env, { bucket, key, expiresSeconds = 600 }) {
  const accessKeyId = env.R2_ACCESS_KEY_ID
  const secretAccessKey = env.R2_SECRET_ACCESS_KEY
  const accountId = env.CF_ACCOUNT_ID
  const host = `${accountId}.r2.cloudflarestorage.com`

  const now = new Date()
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, '') // YYYYMMDDTHHMMSSZ
  const dateStamp = amzDate.slice(0, 8)
  const credentialScope = `${dateStamp}/auto/s3/aws4_request`

  const queryParams = {
    'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
    'X-Amz-Credential': `${accessKeyId}/${credentialScope}`,
    'X-Amz-Date': amzDate,
    'X-Amz-Expires': String(expiresSeconds),
    'X-Amz-SignedHeaders': 'host'
  }
  const canonicalQueryString = Object.keys(queryParams).sort()
    .map(k => `${encodeRfc3986(k)}=${encodeRfc3986(queryParams[k])}`)
    .join('&')

  const canonicalUri = `/${bucket}/${encodePath(key)}`
  const canonicalHeaders = `host:${host}\n`
  const signedHeaders = 'host'
  const payloadHash = 'UNSIGNED-PAYLOAD'

  const canonicalRequest = [
    'PUT', canonicalUri, canonicalQueryString, canonicalHeaders, signedHeaders, payloadHash
  ].join('\n')

  const stringToSign = [
    'AWS4-HMAC-SHA256', amzDate, credentialScope, await sha256Hex(canonicalRequest)
  ].join('\n')

  const kDate = await hmac('AWS4' + secretAccessKey, dateStamp)
  const kRegion = await hmac(kDate, 'auto')
  const kService = await hmac(kRegion, 's3')
  const kSigning = await hmac(kService, 'aws4_request')
  const signature = hex(await hmac(kSigning, stringToSign))

  return `https://${host}${canonicalUri}?${canonicalQueryString}&X-Amz-Signature=${signature}`
}
