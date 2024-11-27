import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Sat", Withdraw: 500, Deposit: 250 },
  { day: "Sun", Withdraw: 400, Deposit: 100 },
  { day: "Mon", Withdraw: 300, Deposit: 200 },
  { day: "Tue", Withdraw: 500, Deposit: 300 },
  { day: "Wed", Withdraw: 400, Deposit: 100 },
  { day: "Thu", Withdraw: 450, Deposit: 200 },
  { day: "Fri", Withdraw: 400, Deposit: 300 },
];

const WeeklyActivity = () => {
  return (
    <div className="w-full max-w-[730px] h-[303px]">
      <h3 className="p-5 text-blue-900 font-semibold">Weekly Activity</h3>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className={`mloverflow-x-auto`}
      >
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          className="bg-white rounded-2xl"
          barGap={8}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            wrapperStyle={{
              top: 10, // Biraz yukarı kaydırır
              right: 20, // Sağ tarafa hizalar
            }}
          />
          <Bar
            dataKey="Withdraw"
            fill="#3b21d6"
            
            barSize={20}
            radius={[10, 10, 10, 10]}
          />
          <Bar
            dataKey="Deposit"
            fill="#00c8a5"
            barSize={20}
            radius={[10, 10, 10, 10]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyActivity;
