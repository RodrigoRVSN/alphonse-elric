import { generateSignature } from "./generateSignature";

type ISignOptions = {
  data: Record<string, any>;
  exp: number;
  secret: string;
}

export function sign({ data, exp, secret }: ISignOptions) {
  const header = {
    alg: 'HS256',
    typ: 'JWT'
  }

  const payload = {
    ...data,
    iat: Date.now(),
    exp: exp
  }

  const base64EncodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url')
  const base64EncodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url')

  const signature = generateSignature({ payload: base64EncodedPayload, header: base64EncodedHeader, secret })

  return `${base64EncodedHeader}.${base64EncodedPayload}.${signature}`
}
