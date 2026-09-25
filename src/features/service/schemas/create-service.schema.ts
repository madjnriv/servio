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
  description: z.string(),
  pricingUnit: z.enum(["HOUR", "MONTH", "DAY", "YEAR"], {
    message: "Pricing unit is required",
  }),
  price: z
    .number({ message: "Price is required" })
    .min(1, { message: "Price must be at least 1" }),
  category: z.string({ message: "Category is required" }),
});

export type CreateServiceDto = z.infer<typeof createServiceDtoSchema>;
