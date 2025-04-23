import { useEffect, useMemo } from "react";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { BudgetPieChart } from "../lib/charts/BudgetPieChart";
import { BudgetTable } from "../components/BudgetTable";
import { BudgetProgressBar } from "../components/BudgetProgressBar";
import { Button } from "../components/ui/button";
import { CirclePlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl">Your current balance</h1>
            <p className="text-3xl font-semibold">
              ${currentBudget.toFixed(2)}
            </p>
          </div>
          <main className="flex flex-col md:flex-row gap-8 md:p-4">
            <div className="flex-1">
              <BudgetPieChart data={data} />
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-base md:text-xl font-semibold">
                  Your transactions
                </h2>
                <Button
                  className="cursor-pointer w-[120px] flex gap-1.5 md:w-auto"
                  onClick={() => navigate("/transactions")}
                >
                  <CirclePlus />
                  <span className="hidden md:inline">Add new</span>Transaction
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <BudgetTable />
              </motion.div>
            </div>
          </main>
        </div>
        <div className="block mx-auto md:hidden">
          <BudgetProgressBar />
        </div>
      </div>
    </motion.div>
  );
}
