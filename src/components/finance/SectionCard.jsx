import React from "react";

const SectionCard = ({ title, subtitle, action, children }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-white via-white to-slate-50/50 p-6 shadow-lg ring-1 ring-slate-200/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/25 dark:bg-linear-to-br dark:from-slate-800 dark:via-slate-800 dark:to-slate-900/50 dark:ring-slate-700/50 dark:hover:shadow-slate-900/25">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-transparent to-purple-50/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/30 dark:to-purple-900/20" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 font-medium">{subtitle}</p>}
          </div>
          {action && (
            <div className="transition-transform duration-200 hover:scale-105">
              {action}
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionCard;