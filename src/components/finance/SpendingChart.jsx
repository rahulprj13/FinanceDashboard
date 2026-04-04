import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import SectionCard from "./SectionCard";

const COLORS = [
  "#3b82f6", // blue
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ef4444", // red
  "#8b5cf6", // violet
  "#06b6d4", // cyan
];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  const data = payload[0];
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-2 text-sm font-bold text-slate-800">{data.name}</p>
      <p className="text-sm text-slate-600">
        Amount: <span className="font-semibold text-slate-900">{data.value}%</span>
      </p>
    </div>
  );
};

const SpendingChart = ({ data }) => {
  return (
    <SectionCard
      title="Spending Breakdown"
      subtitle="Where your money is going this month"
    >
      <div className="h-90 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={110}
              paddingAngle={4}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index % COLORS.length]}
                  style={{
                    filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "13px",
                fontWeight: 500,
              }}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
};

export default SpendingChart;