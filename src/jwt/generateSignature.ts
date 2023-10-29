import { createHmac } from "crypto";

type IGenerateSignature = {
  secret: string;
  header: string;
  payload: string;
}

export function generateSignature({ secret, payload, header }: IGenerateSignature) {
  const hmac = createHmac('sha256', secret)

  return hmac.update(`${header}.${payload}`).digest('base64url')
}
