import { Buffer } from 'node:buffer'

export const fromBase64 = (value: any) => {
  const buff = Buffer.from(value, 'base64')
  const key = buff.toString('ascii').replace(/\\n/g, '\n')
  return key
}
