import { useBudgetContext } from "../hooks/useBudgetContext";
import { Progress } from "./ui/progress";

export function BudgetProgressBar() {
  const { budget, totalExpenses } = useBudgetContext();

  const spentPercentage = budget > 0 ? (totalExpenses / budget) * 100 : 0;

  return (
    <div className="space-y-2 w-[300px]">
      <div className="flex justify-between items-center text-sm font-medium">
        <h1 className="text-lg font-semibold">% of Budget spent</h1>
        <span>{spentPercentage.toFixed(0)}%</span>
      </div>
      <Progress value={spentPercentage} />
    </div>
  );
}
