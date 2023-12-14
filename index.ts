// index.ts
import * as crypto from "crypto";

export function generateUniqueRandomString(
  url: string,
  len: number
): string {
  const hash = crypto.createHash("sha256").update(url).digest("hex");
  return hash.slice(0, len);
}
