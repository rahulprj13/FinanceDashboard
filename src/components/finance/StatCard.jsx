import React from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const StatCard = ({ title, value, change, positive, icon: Icon }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-slate-900 p-6 shadow-lg ring-1 ring-slate-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-white dark:ring-slate-200 dark:hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-50/50 dark:to-purple-50/30" />
      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-slate-400 dark:text-slate-600">{title}</p>
            <h3 className="mt-2 text-3xl font-bold text-slate-100 dark:text-slate-950 tracking-tight">{value}</h3>
          </div>
          <div className="rounded-2xl bg-slate-700 p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:bg-slate-200">
            <Icon className="h-6 w-6 text-slate-300 dark:text-slate-700" />
          </div>
        </div>

        <div
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 ${
            positive
              ? "bg-emerald-900/50 text-emerald-300 ring-1 ring-emerald-700 dark:bg-emerald-100 dark:text-emerald-700 dark:ring-emerald-200"
              : "bg-rose-900/50 text-rose-300 ring-1 ring-rose-700 dark:bg-rose-100 dark:text-rose-700 dark:ring-rose-200"
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