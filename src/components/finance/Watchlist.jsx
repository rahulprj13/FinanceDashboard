import React from "react";
import SectionCard from "./SectionCard";
import { TrendingUp, TrendingDown } from "lucide-react";

const Watchlist = ({ data }) => {
  return (
    <SectionCard title="Market Watchlist" subtitle="Quick look at tracked assets">
      <div className="space-y-4">
        {data.map((item) => {
          const positive = item.change.startsWith("+");
          return (
            <div
              key={item.symbol}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition-all duration-200 hover:border-slate-300 hover:shadow-md hover:bg-slate-50/50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/50"
            >
              <div>
                <p className="font-bold text-slate-900 text-lg dark:text-slate-100">{item.symbol}</p>
                <p className="text-sm text-slate-500 font-medium dark:text-slate-400">{item.name}</p>
              </div>
              
              <div className="text-right">
                <p className="font-bold text-slate-900 text-lg dark:text-slate-100">{item.price}</p>
                <div className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  positive
                    ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300"
                    : "bg-rose-50 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300"
                }`}>
                  {positive ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {item.change}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SectionCard>
  );
};

export default Watchlist;