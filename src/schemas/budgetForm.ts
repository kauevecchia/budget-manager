import { z } from "zod";

export const budgetFormSchema = z.object({
  budget: z.number().min(1, "Budget must be a positive number"),
});
