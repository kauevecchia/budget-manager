import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  Cell,
} from "recharts";

interface BarChartData {
  name: string;
  value: number;
}

interface TinyBarChartProps {
  data: BarChartData[];
}

export function TinyBarChart({ data }: TinyBarChartProps) {
  const filteredData = data.filter((item) => item.value > 0);

  if (filteredData.length === 0) {
    return (
      <div className="border border-border bg-muted rounded-md h-[300px] flex items-center justify-center">
        <p className="text-accent-foreground opacity-50 font-semibold">
          No data available
        </p>
      </div>
    );
  }

  return (
    <div className="border border-border bg-muted rounded-md">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={filteredData}>
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="value" radius={[6, 6, 0, 0]}>
            {filteredData.map((entry, index) => {
              let fillColor = "#ccc";
              if (entry.name === "Budget") fillColor = "#0088FE";
              else if (entry.name === "Expense") fillColor = "#d31616";
              else if (entry.name === "Income") fillColor = "#00da41";

              return <Cell key={`cell-${index}`} fill={fillColor} />;
            })}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
