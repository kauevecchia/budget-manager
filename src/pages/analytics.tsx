import { HighestTransactionCard } from "../components/HighestTransactionCard";
import { TransactionAverageCard } from "../components/TransactionsAverageCard";
import { TransactionCountCard } from "../components/TransactionsCountCard";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { TinyBarChart } from "../lib/charts/BarChart";
import { motion } from "framer-motion";

export function Analytics() {
  const { budget, totalIncomes, totalExpenses } = useBudgetContext();

  const data = [
    { name: "Budget", value: budget },
    { name: "Income", value: totalIncomes },
    { name: "Expense", value: totalExpenses },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h1 className="text-3xl font-semibold">Analytics</h1>
        <main className="flex flex-col gap-16 md:p-4">
          <div className="mt-4">
            <TinyBarChart data={data} />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold">Insights</h2>
            <div className="grid grid-rows-3 md:grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <TransactionAverageCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <TransactionCountCard />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <HighestTransactionCard />
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
