import { ScrollText } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useBudgetContext } from "../hooks/useBudgetContext";

export function TransactionAverageCard() {
  const { totalIncomes, totalExpenses, transactions } = useBudgetContext();

  const incomeCount = transactions.filter((t) => t.type === "income").length;
  const expenseCount = transactions.filter((t) => t.type === "expense").length;

  const averageIncomesValue = incomeCount > 0 ? totalIncomes / incomeCount : 0;
  const averageExpensesValue =
    expenseCount > 0 ? totalExpenses / expenseCount : 0;

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>Average transaction type value</CardTitle>
        <ScrollText />
      </CardHeader>
      <CardContent>
        <ul>
          <li className="flex items-center gap-2">
            Income:
            <span className="text-green-600 dark:text-green-500 font-semibold text-xl">
              ${averageIncomesValue.toFixed(2)}
            </span>
          </li>
          <li className="flex items-center gap-2">
            Expense:
            <span className="text-red-600 dark:text-red-500 font-semibold text-xl">
              ${averageExpensesValue.toFixed(2)}
            </span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        {averageIncomesValue > 0 && averageExpensesValue > 0 ? (
          averageIncomesValue > averageExpensesValue ? (
            <p>
              Your average incomes value is{" "}
              <span className="text-green-600 dark:text-green-500 font-semibold">
                {((averageIncomesValue / averageExpensesValue) * 100).toFixed(
                  0
                )}
                %
              </span>{" "}
              higher than your average expense value
            </p>
          ) : (
            <p>
              Your average expenses value is{" "}
              <span className="text-red-600 dark:text-red-500 font-semibold">
                {((averageExpensesValue / averageIncomesValue) * 100).toFixed(
                  0
                )}
                %
              </span>{" "}
              higher than your average income value
            </p>
          )
        ) : (
          <p className="text-muted-foreground italic">
            Not enough data to compare averages
          </p>
        )}
      </CardFooter>
    </Card>
  );
}
