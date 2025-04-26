import { useForm, Controller } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { DollarSign } from "lucide-react";
import { budgetFormSchema } from "../schemas/budgetForm";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formatCurrency, parseCurrency } from "../utils/currency";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { useBudgetContext } from "../hooks/useBudgetContext";

type BudgetFormInputs = z.infer<typeof budgetFormSchema>;

export function Budget() {
  const { handleStoreBudget } = useBudgetContext();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BudgetFormInputs>({
    resolver: zodResolver(budgetFormSchema),
  });

  const navigate = useNavigate();

  function onSubmit(data: BudgetFormInputs) {
    handleStoreBudget(data.budget);
    toast.success("Budget set successfully!");
    navigate("/transactions");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Your Budget</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full md:w-1/2 md:p-4"
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="budget">Set your current budget</Label>

            <Controller
              name="budget"
              control={control}
              defaultValue={0}
              render={({ field }) => {
                const formatted =
                  field.value === 0 ? "" : formatCurrency(field.value);

                return (
                  <Input
                    type="text"
                    id="budget"
                    placeholder="Enter amount (e.g. $1,000.00)"
                    value={formatted}
                    onChange={(e) => {
                      const raw = parseCurrency(e.target.value);
                      field.onChange(raw);
                    }}
                  />
                );
              }}
            />
            {errors.budget && (
              <p className="text-sm text-red-500">{errors.budget.message}</p>
            )}
          </div>

          <Button className="cursor-pointer w-full md:max-w-48 text-left">
            <DollarSign />
            Set budget
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
