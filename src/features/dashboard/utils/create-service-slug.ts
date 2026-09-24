import * as Crypto from "expo-crypto";

export const createServiceSlug = (name: string) => {
  const baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with a single hyphen
    .replace(/^-+|-+\$/g, ""); // Trim hyphens from ends

  return `${baseSlug}-${Crypto.randomUUID()}`;
};
