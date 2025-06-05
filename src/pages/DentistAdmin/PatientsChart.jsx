import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    label: "New Patients",
    value: 2000,
    percentage: "20.2%",
    month: "In May",
  },
  {
    label: "Return Patients",
    value: 6000,
    percentage: "22.8%",
    month: "In May",
  },
  {
    label: "Male Patients",
    value: 3000,
    percentage: "38.9%",
    month: "In May",
  },
  {
    label: "Female Patients",
    value: 4000,
    percentage: "49.3%",
    month: "In May",
  },
];

const chartData = [
  { month: "Jan", patients: 1400 },
  { month: "Feb", patients: 1200 },
  { month: "Mar", patients: 1500 },
  { month: "Apr", patients: 1700 },
  { month: "May", patients:3100 },
  { month: "Jun", patients: 2000 },
  { month: "Jul", patients: 2200 },
  { month: "Aug", patients: 2500 },
  { month: "Sep", patients: 2700 },
  { month: "Oct", patients: 3000 },
  { month: "Nov", patients: 3200 },
  { month: "Dec", patients: 3400 },
];

const PatientsOverview = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-2 border border-primary/25 space-y-4 ">
      <h2 className="text-lg font-semibold">Patients</h2>

      {/* Stats Section */}
      <div className="flex gap-2 flex-wrap ">
        {stats.map((item, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 pt-1 text-center"
          >
            <p className="text-sm text-start font-medium ">{item.label}</p>
            <p className="text-2xl flex gap-2 font-bold">{item.value}  <p className="text-sm text-primary">{item.percentage}</p></p>
           
            <p className="text-xs text-primary bg-primary/15 p-[2px] rounded-[3px] w-fit border border-primary/40">{item.month}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <ResponsiveContainer width="100%" height={320}>
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
                 barSize={28}
               />
             </BarChart>
           </ResponsiveContainer>
    </div>
  );
};

export default PatientsOverview;
