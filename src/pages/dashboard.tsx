import { useEffect, useMemo } from "react";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { BudgetPieChart } from "../lib/charts/BudgetPieChart";
import { BudgetTable } from "../components/BudgetTable";
import { BudgetProgressBar } from "../components/BudgetProgressBar";
import { Button } from "../components/ui/button";
import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const {
    transactions,
    currentBudget,
    handleGetCurrentBudget,
    budget,
    totalIncomes,
    totalExpenses,
  } = useBudgetContext();

  const navigate = useNavigate();

  useEffect(() => {
    handleGetCurrentBudget();
  }, [transactions, handleGetCurrentBudget]);

  const data = useMemo(
    () => [
      { name: "Budget", value: budget },
      { name: "Expense", value: totalExpenses },
      { name: "Income", value: totalIncomes },
    ],
    [budget, totalExpenses, totalIncomes]
  );

  return (
    <div className="flex flex-col gap-48">
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-2xl">Your current balance</h1>
          <p className="text-3xl font-semibold">${currentBudget.toFixed(2)}</p>
        </div>
        <main className="flex gap-6 p-4">
          <div className="flex-1">
            <BudgetPieChart data={data} />
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Your transactions</h2>
              <Button
                className="cursor-pointer"
                onClick={() => navigate("/transactions")}
              >
                <CirclePlus />
                Add new transaction
              </Button>
            </div>
            <BudgetTable />
          </div>
        </main>
      </div>
      <div className="block md:hidden">
        <BudgetProgressBar />
      </div>
    </div>
  );
}
