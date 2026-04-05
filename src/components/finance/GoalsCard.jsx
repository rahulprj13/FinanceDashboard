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
              <span className="font-semibold text-slate-700 flex items-center gap-2 dark:text-slate-300">
                <Target className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                {goal.name}
              </span>
              <span className="text-slate-500 font-medium dark:text-slate-400">{goal.value}%</span>
            </div>
            <div className="relative">
              <div className="h-4 rounded-full bg-slate-100 overflow-hidden dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${goal.value}%` }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500/20 to-purple-600/20 animate-pulse" />
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 p-5 text-white shadow-lg dark:from-slate-800 dark:to-slate-700">
          <p className="text-sm text-slate-300 font-medium mb-2 dark:text-slate-200">💡 Savings Tip</p>
          <p className="text-sm leading-relaxed text-slate-100 dark:text-slate-300">
            You are overspending on wants this month. Moving just 8% more into
            savings would keep you on track.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default GoalsCard;