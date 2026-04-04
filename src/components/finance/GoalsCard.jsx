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
              <span className="font-semibold text-slate-700 flex items-center gap-2">
                <Target className="h-4 w-4 text-slate-500" />
                {goal.name}
              </span>
              <span className="text-slate-500 font-medium">{goal.value}%</span>
            </div>
            <div className="relative">
              <div className="h-4 rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                  style={{ width: `${goal.value}%` }}
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 animate-pulse" />
            </div>
          </div>
        ))}

        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-lg">
          <p className="text-sm text-slate-300 font-medium mb-2">💡 Savings Tip</p>
          <p className="text-sm leading-relaxed text-slate-100">
            You are overspending on wants this month. Moving just 8% more into
            savings would keep you on track.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};

export default GoalsCard;