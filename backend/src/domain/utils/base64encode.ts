import { Buffer } from 'buffer'

export default (string) => {
  return Buffer.from(String.fromCharCode.apply(null, new Uint8Array(string)))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}
