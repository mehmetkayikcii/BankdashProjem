import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { name: "Jul", value: 150 },
  { name: "Aug", value: 250 },
  { name: "Sep", value: 450 },
  { name: "Oct", value: 700 },
  { name: "Nov", value: 500 },
  { name: "Dec", value: 400 },
  { name: "Jan", value: 600 },
];
const BalanceHistory = () => {
  return (
    <div className="w-full max-w-[635px] h-[323px] ">
      <h3 className="p-5 text-blue-900 font-semibold">Balance History</h3>
      <div className="w-full h-64 bg-white rounded-2xl p-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0005ff" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0055ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#0055ff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BalanceHistory;
