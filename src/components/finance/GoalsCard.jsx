import React from "react";
import SectionCard from "./SectionCard";
import { Target } from "lucide-react";

const GoalsCard = ({ goals }) => {
  return (
    <SectionCard title="Finance Goals" subtitle="Track your progress this month">
      <div className="space-y-6">
        {goals.map((goal) => (
          <div key={goal.name} className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-300 flex items-center gap-2 dark:text-slate-700">
                <Target className="h-4 w-4 text-slate-400 dark:text-slate-500" />
                {goal.name}
              </span>
              <span className="text-slate-400 font-medium dark:text-slate-500">{goal.value}%</span>
            </div>
            <div className="relative">
              <div className="h-4 rounded-full bg-slate-700 overflow-hidden dark:bg-slate-100">
                <div
                  className="h-full rounded-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${goal.value}%` }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 animate-pulse" />
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-linear-to-br from-slate-800 to-slate-700 p-5 text-white shadow-lg dark:from-slate-100 dark:to-slate-200 dark:text-slate-900">
          <p className="text-sm text-slate-200 font-medium mb-2 dark:text-slate-600">💡 Savings Tip</p>
          <p className="text-sm leading-relaxed text-slate-300 dark:text-slate-700">
            You are overspending on wants this month. Moving just 8% more into
            savings would keep you on track.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default GoalsCard;