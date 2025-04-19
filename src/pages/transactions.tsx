import { Button } from "../components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { Label } from "../components/ui/label";
import { Controller } from "react-hook-form";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function Transactions() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Transactions</h1>
      <form className="flex flex-col gap-3 p-4 md:w-1/2">
        <div className="flex flex-col gap-1">
          <Label htmlFor="transaction-type">Transaction Type</Label>
          <Controller
            control={control}
            name="type"
            defaultValue="income"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="amount">Amount</Label>
          <Controller
            name="amount"
            control={control}
            defaultValue={0}
            render={({ field }) => {
              return (
                <Input
                  type="text"
                  id="budget"
                  placeholder="Enter amount (e.g. $250,00)"
                />
              );
            }}
          />
        </div>

        <Button type="submit" className="max-w-48 cursor-pointer mt-2">
          Submit
          <CircleArrowRight />
        </Button>
      </form>
    </div>
  );
}
