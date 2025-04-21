import { z } from "zod";

export const transactionFormSchema = z.object({
  type: z.enum(["income", "expense"]),
  description: z
    .string()
    .min(1, "Description is required")
    .max(50, "Description must be less than 50 characters"),
  amount: z.number().min(1, "Amount must be greater than zero"),
});
