import React from "react";
import {
  Stethoscope,
  DollarSign,
  Calendar,
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const dataMokup = [
  {
    name: "Patients",
    value: 660,
    icon: <Stethoscope />,
    percentage: "+40",
    percentageText: "this month",
    trend: [100, 120, 140, 160, 150, 170, 190],
  },
  {
    name: "Appointments",
    value: 230,
    icon: <Calendar />,
    percentage: "+30",
    percentageText: "this month",
    trend: [50, 600, 70, 80, 190, 100, 110],
  },
  {
    name: "Revenue",
    value: "$9900",
    icon: <DollarSign />,
    percentage: "+20%",
    percentageText: "this month",
    trend: [3000, 4000, 4500, 6000, 7200, 800, 9900],
  },
];

const OverViewCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {dataMokup.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg bborder border-primary/25 shadow p-6 flex flex-col justify-between"
        >
          {/* Header */}
          <div className="flex items-center gap-5">
            <div className="border-2 border-primary rounded-full p-2">
              <div className="bg-secondary/20 rounded-full p-4 text-primary">
                {item.icon}
              </div>
            </div>
            <div>
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-sm font-medium">{item.name}</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end mt-4">
            <div>
              <div className="p-2 text-primary font-medium">{item.percentage}</div>
              <div className="text-xs text-primary bg-primary/20 rounded-md px-2 py-1 w-fit">
                {item.percentageText}
              </div>
            </div>
            <div className="h-12 w-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={item.trend.map((val, i) => ({ value: val }))}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    className="fill-primary"
                    strokeWidth={5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverViewCards;
