import { hash, compare } from "bcryptjs";

export async function hashPassword(password) {
  const securePassword = await hash(password, 12);
  return securePassword;
}

export async function verifyPassword(password, securePassword) {
  const isValid = await compare(password, securePassword);
  return isValid;
}
