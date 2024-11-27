import React from "react";
import { PieChart, Pie, Cell} from "recharts";

const data = [
  { name: "Entertainment", value: 30, color: "#2D3748" },
  { name: "Bill Expense", value: 15, color: "#ED8936" },
  { name: "Investment", value: 20, color: "#D53F8C" },
  { name: "Others", value: 35, color: "#2B6CB0" },
];

const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14}
      fontWeight="bold"
    >
      {`${data[index].value}%`}
      <tspan x={x} y={y + 18}>
        {data[index].name}
      </tspan>
    </text>
  );
};

const ExpenseStatistics = () => {
  return (
    <div className="w-full max-w-[350px] h-[367px]">
      <h3 className="text-blue-900 font-semibold p-5">Expense Statistics</h3>
      <div className="flex justify-center items-center bg-white rounded-2xl">
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx={150}
            cy={150}
            label={renderCustomLabel}
            labelLine={false}
            outerRadius={120}
            startAngle={90}
            endAngle={-270}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default ExpenseStatistics;
