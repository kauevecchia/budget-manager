import { useBudgetContext } from "../hooks/useBudgetContext";
import { TinyBarChart } from "../lib/charts/BarChart";

export function Analytics() {
  const { budget, totalIncomes, totalExpenses } = useBudgetContext();

  const data = [
    { name: "Budget", value: budget },
    { name: "Income", value: totalIncomes },
    { name: "Expense", value: totalExpenses },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold">Analytics</h1>
      <main className="flex flex-col gap-16 p-4">
        <div className="mt-4">
          <TinyBarChart data={data} />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Insights</h2>
          <div className="grid grid-cols-3 gap-4"></div>
        </div>
      </main>
    </div>
  );
}
