import { z } from "zod";

export const budgetFormSchema = z.object({
  budget: z.number().min(0, "Budget must be a positive number"),
});
