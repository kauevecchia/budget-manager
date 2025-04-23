import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
interface PieChartData {
  name: string;
  value: number;
}

interface BudgetPieChartProps {
  data: PieChartData[];
}

export function BudgetPieChart({ data }: BudgetPieChartProps) {
  const filteredData = data.filter((item) => item.value > 0);

  if (!filteredData || filteredData.length === 0) {
    return (
      <div className="border border-border bg-muted rounded-md min-h-[300px] flex items-center justify-center">
        <p className="text-accent-foreground opacity-50 font-semibold">
          No data available
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-muted rounded-md">
      <ResponsiveContainer height={300}>
        <PieChart>
          <Pie
            data={filteredData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={60}
            paddingAngle={2}
            label
            isAnimationActive={true}
          >
            {filteredData.map((entry, index: number) => {
              let fillColor = "#ccc";
              if (entry.name === "Budget") fillColor = "#0088FE";
              else if (entry.name === "Expense") fillColor = "#d31616";
              else if (entry.name === "Income") fillColor = "#00da41";
              return <Cell key={`cell-${index}`} fill={fillColor} />;
            })}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
