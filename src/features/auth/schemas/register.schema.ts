import { z } from "zod";

export const registerDtoSchema = z
  .object({
    name: z
      .string("Please enter your name")
      .min(3, "Your name must be at least 3 characters long")
      .max(100, "Your name must be 100 characters or fewer"),
    email: z
      .string("Please enter your email address")
      .trim()
      .min(1, "Please enter your email address")
      .toLowerCase()
      .pipe(z.email("Please enter a valid email address")),
    password: z
      .string("Please enter a password")
      .min(8, "Your password must be at least 8 characters long")
      .max(100, "Your password must be 100 characters or fewer"),
  })
  .strict();

export type RegisterDto = z.infer<typeof registerDtoSchema>;
