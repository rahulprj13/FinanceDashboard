import React from "react";

const SectionCard = ({ title, subtitle, action, children }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 transition-all duration-300 hover:shadow-xl dark:bg-slate-900 dark:ring-slate-700 dark:hover:shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/30 via-transparent to-purple-50/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:from-blue-900/30 dark:to-purple-900/20" />
      <div className="relative">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">{title}</h3>
            {subtitle && <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 font-medium">{subtitle}</p>}
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