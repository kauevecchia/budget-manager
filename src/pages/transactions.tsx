import { useForm, Controller } from "react-hook-form";
import { Button } from "../components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { formatCurrency, parseCurrency } from "../utils/currency";
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../components/ui/select";
import { transactionFormSchema } from "../schemas/transactionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { motion } from "framer-motion";

type TransactionFormInput = z.infer<typeof transactionFormSchema>;

export function Transactions() {
  const { handleAddTransaction, userId } = useBudgetContext();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TransactionFormInput>({
    resolver: zodResolver(transactionFormSchema),
  });

  const navigate = useNavigate();

  function handleOnSubmit(data: TransactionFormInput) {
    const newTransaction = {
      userId: userId,
      id: Date.now(),
      type: data.type,
      description: data.description,
      amount: data.amount,
    };

    try {
      handleAddTransaction(newTransaction);
      toast.success("Transaction added successfully!");
    } catch (error) {
      console.error("Error while adding transaction:", error);
      toast.error("Error while adding transaction. Please try again later.");
    }
    navigate("/dashboard");
    reset();
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-6">
        <h1 className="text-3xl font-semibold">Transactions</h1>
        <form
          className="flex flex-col gap-3 md:p-4 md:w-1/2"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <div className="flex flex-col gap-1">
            <Label htmlFor="transaction-type">Transaction Type</Label>
            <Controller
              control={control}
              name="type"
              defaultValue="income"
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger id="transaction-type" className="w-full">
                    <SelectValue placeholder="Transaction Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="income">Income</SelectItem>
                    <SelectItem value="expense">Expense</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="description">Description</Label>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  type="text"
                  id="description"
                  placeholder="e.g. Salary, Rent, Coffee..."
                  {...field}
                />
              )}
            />
            {errors.description && (
              <p className="text-red-600 text-sm">
                {errors.description.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="amount">Amount</Label>
            <Controller
              name="amount"
              control={control}
              defaultValue={0}
              render={({ field }) => {
                const formatted =
                  field.value === 0 ? "" : formatCurrency(field.value);

                return (
                  <Input
                    type="text"
                    id="budget"
                    placeholder="Enter amount (e.g. $250,00)"
                    value={formatted}
                    onChange={(e) => {
                      const raw = parseCurrency(e.target.value);
                      field.onChange(raw);
                    }}
                  />
                );
              }}
            />
            {errors.amount && (
              <p className="text-red-600 text-sm">{errors.amount.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full md:max-w-48 cursor-pointer mt-2"
          >
            Submit
            <CircleArrowRight />
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
