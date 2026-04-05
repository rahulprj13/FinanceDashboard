import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ title, value, change, positive, icon: Icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-slate-900 dark:ring-slate-700 dark:hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/30 dark:to-purple-900/20" />
      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-600 dark:text-slate-400">{title}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-950 dark:text-slate-100 tracking-tight">{value}</h3>
          </div>
          <div className="rounded-2xl bg-slate-200 p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-slate-700">
            <Icon className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
            positive
              ? "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:ring-emerald-700"
              : "bg-rose-100 text-rose-700 ring-1 ring-rose-200 dark:bg-rose-900/50 dark:text-rose-300 dark:ring-rose-700"
          }`}
        >
          {positive ? (
            <ArrowUpRight className="h-3.5 w-3.5" />
          ) : (
            <ArrowDownRight className="h-3.5 w-3.5" />
          )}
          {change}
        </div>
      </div>
    </div>
  );
};

export default StatCard;