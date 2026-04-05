import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Target, TrendingUp } from "lucide-react";
import SectionCard from "./SectionCard";
import { useFinance } from "../../context/FinanceContext";

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/95 px-4 py-3 shadow-xl backdrop-blur dark:border-slate-200 dark:bg-white/95">
      <p className="mb-2 text-sm font-semibold text-slate-200 dark:text-slate-800">{label}</p>
      <div className="space-y-1">
        <p className="text-sm text-slate-400 dark:text-slate-600">
          Planned: <span className="font-semibold text-slate-100 dark:text-slate-900">${payload[0]?.value}</span>
        </p>
        <p className="text-sm text-slate-400 dark:text-slate-600">
          Actual: <span className="font-semibold text-emerald-400 dark:text-emerald-600">${payload[1]?.value}</span>
        </p>
      </div>
    </div>
  );
};

const BudgetChart = ({ data }) => {
  const { darkMode } = useFinance();
  const gridStroke = darkMode ? "#e2e8f0" : "#374151";
  const tickFill = darkMode ? "#475569" : "#9ca3af";
  const tickFillY = darkMode ? "#64748b" : "#94a3b8";
  const legendColor = darkMode ? "#334155" : "#cbd5e1";

  const totalPlanned = data.reduce((sum, item) => sum + item.planned, 0);
  const totalActual = data.reduce((sum, item) => sum + item.actual, 0);
  const progress = Math.round((totalActual / totalPlanned) * 100);

  return (
    <SectionCard
      title="Budget vs Actual"
      subtitle="Planned versus actual allocation by category"
    >
      <div className="space-y-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-4 dark:border-slate-200 dark:bg-slate-50">
            <div className="mb-2 flex items-center gap-2">
              <div className="rounded-xl bg-slate-700 p-2 text-white dark:bg-slate-800">
                <Target className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">Total Planned</p>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-900">${totalPlanned}</h3>
          </div>

          <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/25 p-4 dark:border-emerald-200 dark:bg-emerald-50">
            <div className="mb-2 flex items-center gap-2">
              <div className="rounded-xl bg-emerald-600 p-2 text-white dark:bg-emerald-500">
                <TrendingUp className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-emerald-300 dark:text-emerald-700">Total Actual</p>
            </div>
            <h3 className="text-2xl font-bold text-emerald-300 dark:text-emerald-700">${totalActual}</h3>
          </div>

          <div className="rounded-2xl border border-blue-800/40 bg-blue-950/25 p-4 dark:border-blue-200 dark:bg-blue-50">
            <p className="mb-2 text-sm font-medium text-blue-300 dark:text-blue-700">Budget Usage</p>
            <h3 className="text-2xl font-bold text-blue-200 dark:text-blue-800">{progress}%</h3>
            <div className="mt-3 h-2.5 w-full rounded-full bg-blue-900/40 dark:bg-blue-100">
              <div
                className="h-2.5 rounded-full bg-blue-500 dark:bg-blue-600 transition-all duration-500"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700 bg-linear-to-br from-slate-800 to-slate-900/50 p-4 dark:border-slate-200 dark:bg-linear-to-br dark:from-white dark:to-slate-50">
          <div className="h-85 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                barGap={10}
                barCategoryGap="22%"
                margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="plannedGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="actualGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>

                <CartesianGrid
                  strokeDasharray="4 4"
                  vertical={false}
                  stroke={gridStroke}
                />
                <XAxis
                  dataKey="category"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: tickFill, fontSize: 13, fontWeight: 500 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: tickFillY, fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  wrapperStyle={{
                    paddingTop: "10px",
                    fontSize: "13px",
                    color: legendColor,
                  }}
                />
                <Bar
                  dataKey="planned"
                  name="Planned"
                  radius={[12, 12, 0, 0]}
                  fill="url(#plannedGradient)"
                  maxBarSize={34}
                />
                <Bar
                  dataKey="actual"
                  name="Actual"
                  radius={[12, 12, 0, 0]}
                  fill="url(#actualGradient)"
                  maxBarSize={34}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </SectionCard>
  );
};

export default BudgetChart;