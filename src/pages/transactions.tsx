import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { z } from "zod";
import { transactionFormSchema } from "../schemas/transactionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { formatCurrency, parseCurrency } from "../utils/currency";

type TransactionFormInput = z.infer<typeof transactionFormSchema>;

function onSubmit(data: TransactionFormInput) {
  console.log(data);
}

export function Transactions() {
  const { control, handleSubmit } = useForm<TransactionFormInput>({
    resolver: zodResolver(transactionFormSchema),
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Transactions</h1>

      <form
        className="flex flex-col gap-3 p-4 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1">
          <Label htmlFor="transaction-type">Transaction Type</Label>
          <Select defaultValue="income">
            <SelectTrigger id="transaction-type" className="w-full">
              <SelectValue placeholder="Transaction Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="income">Income</SelectItem>
              <SelectItem value="expense">Expense</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            id="description"
            placeholder="e.g. Salary, Rent, Coffee..."
          ></Input>
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
        </div>

        <Button className="max-w-48 cursor-pointer mt-2">
          Submit
          <CircleArrowRight />
        </Button>
      </form>
    </div>
  );
}
