import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

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
    return <div>No data available</div>;
  }

  return (
    <div className="border border-border bg-muted rounded-md max-w-2xl">
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
