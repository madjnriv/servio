import { z } from "zod";

export const createServiceDtoSchema = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(100, { message: "Name must be at most 100 characters long" }),
  excerpt: z
    .string()
    .min(10, { message: "Excerpt must be at least 10 characters long" })
    .max(200, { message: "Excerpt must be at most 200 characters long" }),
  description: z
    .string()
    .min(100, { message: "Description must be at least 100 characters long" })
    .max(1000, { message: "Description must be at most 1000 characters long" }),
  pricingUnit: z.enum(["HOUR", "MONTH", "DAY", "YEAR"], {
    message: "Pricing unit is required",
  }),
  price: z
    .string()
    .min(1, { message: "Price must be at least 1" })
    .regex(/^\d+(?:\.\d+)?$/, { message: "Price must be a valid number" }),
  category: z.string({ message: "Category is required" }),
});

export type CreateServiceDto = z.infer<typeof createServiceDtoSchema>;
