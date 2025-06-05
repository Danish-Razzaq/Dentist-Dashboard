import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", patients: 1400 },
  { month: "Feb", patients: 1200 },
  { month: "Mar", patients: 1500 },
  { month: "Apr", patients: 1700 },
  { month: "May", patients: 2100 },
  { month: "Jun", patients: 1000 },
  { month: "Jul", patients: 2200 },
  { month: "Aug", patients: 2500 },
  { month: "Sep", patients: 2700 },
  { month: "Oct", patients: 3000 },
  { month: "Nov", patients: 3200 },
  { month: "Dec", patients: 3400 },
];

const Income = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-2 border border-primary/25 space-y-4 ">
      <h2 className="text-xl  text-gray-800 mb-6">Income</h2>

      <ResponsiveContainer width="100%" height={520}>
        <BarChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 30 }}
          barCategoryGap={12}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          {/* Remove YAxis */}
          <Tooltip />
          <Bar
            dataKey="patients"
            className="fill-primary"
            radius={[8, 8, 0, 0]}
            barSize={38}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Income;
