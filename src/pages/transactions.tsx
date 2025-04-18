import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import { CircleArrowRight } from "lucide-react";

export function Transactions() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Transactions</h1>

      <form className="flex flex-col gap-3 p-4 md:w-1/2">
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
          <Input
            type="text"
            id="budget"
            placeholder="Enter amount (e.g. $250,00)"
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
