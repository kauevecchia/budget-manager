import { ListOrdered } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useBudgetContext } from "../hooks/useBudgetContext";

export function TransactionCountCard() {
  const { transactions } = useBudgetContext();

  const incomeCount = transactions.filter((t) => t.type === "income").length;
  const expenseCount = transactions.filter((t) => t.type === "expense").length;

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Transaction count by type</CardTitle>
        <ListOrdered />
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center gap-2">
            Income:
            <span className="text-green-600 font-semibold text-xl">
              {incomeCount}
            </span>
          </li>
          <li className="flex items-center gap-2">
            Expense:
            <span className="text-red-600 font-semibold text-xl">
              {expenseCount}
            </span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        {incomeCount > 0 && expenseCount > 0 ? (
          incomeCount > expenseCount ? (
            <p>
              You have{" "}
              <span className="text-green-600 font-semibold">
                {((incomeCount / expenseCount) * 100).toFixed(0)}%
              </span>{" "}
              more income transactions than expenses.
            </p>
          ) : (
            <p>
              You have{" "}
              <span className="text-red-600 font-semibold">
                {((expenseCount / incomeCount) * 100).toFixed(0)}%
              </span>{" "}
              more expense transactions than incomes.
            </p>
          )
        ) : (
          <p className="text-muted-foreground italic">
            Not enough data to compare transactions
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
