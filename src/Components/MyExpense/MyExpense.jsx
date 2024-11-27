import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { name: "Aug", value: 9000 },
  { name: "Sep", value: 13000 },
  { name: "Oct", value: 9500 },
  { name: "Nov", value: 5000 },
  { name: "Dec", value: 12500 },
  { name: "Jan", value: 8000 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded-lg shadow-lg">
        <p className="text-black text-sm font-semibold">{`$${payload[0].value.toLocaleString()}`}</p>
      </div>
    );
  }

  return null;
};

const renderCustomLabel = (props) => {
  const { x, y, width, value, index } = props;
  const offset = 10; 

  if (index === 4) {
    
    return (
      <text
        x={x + width / 2}
        y={y - offset}
        fill="#343C6A"
        textAnchor="middle"
        fontSize={14}
        fontWeight="bold"
      >
        {`$${value.toLocaleString()}`}
      </text>
    );
  }

  return null;
};

const MyExpense = () => {
  return (
    <div className="w-full max-w-[350px] h-[282px]">
      <p className="p-5 text-blue-900 font-semibold ">My Expense</p>
      <div className="bg-white text-black rounded-2xl p-5  w-[350px] h-[235px]">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#A0AEC0", fontSize: 14 }}
            />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="value" barSize={30} radius={[10, 10, 10, 10]}>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.name === "Dec" ? "#00C2C5" : "#E0E0E0"}
                />
              ))}
              <LabelList dataKey="value" content={renderCustomLabel} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MyExpense;
