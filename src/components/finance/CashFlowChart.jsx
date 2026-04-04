import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import SectionCard from "./SectionCard";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-sm">
      <p className="mb-3 text-sm font-bold text-slate-800">{label}</p>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <span className="text-sm text-slate-600">Income:</span>
          <span className="font-semibold text-slate-900">${payload[0]?.value?.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <span className="text-sm text-slate-600">Expense:</span>
          <span className="font-semibold text-slate-900">${payload[1]?.value?.toLocaleString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-slate-500"></div>
          <span className="text-sm text-slate-600">Balance:</span>
          <span className="font-semibold text-slate-900">
            ${(payload[0]?.payload?.balance || 0).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

const CashFlowChart = ({ data }) => {
  return (
    <SectionCard
      title="Cash Flow Analytics"
      subtitle="Income, expenses, and running balance over time"
      action={
        <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-105">
          Export
        </button>
      }
    >
      <div className="h-[360px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="50%" stopColor="#ef4444" stopOpacity={0.15} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0.03} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 13, fontWeight: 500 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                paddingTop: "20px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            />
            <Area
              type="monotone"
              dataKey="income"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#incomeGrad)"
              name="Income"
            />
            <Area
              type="monotone"
              dataKey="expense"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#expenseGrad)"
              name="Expense"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </SectionCard>
  );
};

export default CashFlowChart;