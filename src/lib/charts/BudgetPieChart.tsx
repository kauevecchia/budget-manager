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
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ResponsiveContainer className="max-w-2xl" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          paddingAngle={5}
          label
        >
          {data.map((_, index: number) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
