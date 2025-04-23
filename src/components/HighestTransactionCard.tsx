import { TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useBudgetContext } from "../hooks/useBudgetContext";

export function HighestTransactionCard() {
  const { transactions } = useBudgetContext();

  const incomeTransactions = transactions.filter((t) => t.type === "income");
  const expenseTransactions = transactions.filter((t) => t.type === "expense");

  const highestIncome =
    incomeTransactions.length > 0
      ? incomeTransactions.reduce((max, curr) =>
          curr.amount > max.amount ? curr : max
        )
      : null;

  const highestExpense =
    expenseTransactions.length > 0
      ? expenseTransactions.reduce((max, curr) =>
          curr.amount > max.amount ? curr : max
        )
      : null;

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Highest transaction per type</CardTitle>
        <TrendingUp />
      </CardHeader>
      <CardContent className="space-y-2">
        <ul>
          <li className="flex items-center gap-2">
            Income:
            <span className="text-green-600 dark:text-green-500 font-semibold text-xl">
              ${highestIncome ? highestIncome.amount.toFixed(2) : "N/A"}
            </span>
          </li>
          <li className="flex items-center gap-2">
            Expense:
            <span className="text-red-600 dark:text-red-500 font-semibold text-xl">
              ${highestExpense ? highestExpense.amount.toFixed(2) : "N/A"}
            </span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        {highestIncome && highestExpense ? (
          highestIncome.amount > highestExpense.amount ? (
            <p>
              Your highest income is{" "}
              <span className="text-green-600 dark:text-green-500 font-semibold">
                {((highestIncome.amount / highestExpense.amount) * 100).toFixed(
                  0
                )}
                %
              </span>{" "}
              higher than your highest expense.
            </p>
          ) : (
            <p>
              Your highest expense is{" "}
              <span className="text-red-600 dark:text-red-500 font-semibold">
                {((highestExpense.amount / highestIncome.amount) * 100).toFixed(
                  0
                )}
                %
              </span>{" "}
              higher than your highest income.
            </p>
          )
        ) : (
          <p className="text-muted-foreground italic">
            Not enough data to compare highest values
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
