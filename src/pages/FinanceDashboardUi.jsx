import React, { useMemo, useState } from "react";
import { Wallet, TrendingUp, TrendingDown, BarChart3 } from "lucide-react";

import Sidebar from "../components/finance/Sidebar";
import Header from "../components/finance/Header";
import StatCard from "../components/finance/StatCard";
import CashFlowChart from "../components/finance/CashFlowChart";
import SpendingChart from "../components/finance/SpendingChart";
import BudgetChart from "../components/finance/BudgetChart";
import Watchlist from "../components/finance/Watchlist";
import TransactionsTable from "../components/finance/TransactionsTable";
import GoalsCard from "../components/finance/GoalsCard";
import SectionCard from "../components/finance/SectionCard";
import { useFinance } from "../context/FinanceContext";

import {
  monthlyData,
  spendingData,
  budgetData,
  watchlist,
  goals,
} from "../data/FinanceData";

const FinanceDashboardUI = () => {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const { insights } = useFinance();

  const totalIncome = insights.totalIncome;
  const totalExpense = insights.totalExpenses;
  const netBalance = totalIncome - totalExpense;

  return (
    <div className={`min-h-screen bg-linear-to-br from-slate-900 via-slate-800/30 to-slate-950/20 text-slate-100 dark:from-slate-50 dark:via-blue-50/30 dark:to-purple-50/20 dark:text-slate-900`}>
      <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[280px_1fr]">
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        <main className="px-6 py-6 sm:px-8 sm:py-8 lg:px-10">

          <Header />

          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              title="Net Balance"
              value={`$${netBalance.toLocaleString()}`}
              change="8.2%"
              positive
              icon={Wallet}
            />
            <StatCard
              title="Total Income"
              value={`$${totalIncome.toLocaleString()}`}
              change="10.4%"
              positive
              icon={TrendingUp}
            />
            <StatCard
              title="Total Expenses"
              value={`$${totalExpense.toLocaleString()}`}
              change="3.1%"
              positive={false}
              icon={TrendingDown}
            />
            <StatCard
              title="Investments"
              value="$18,240"
              change="6.8%"
              positive
              icon={BarChart3}
            />
          </section>

          <section className="mt-8 grid grid-cols-1 gap-8 2xl:grid-cols-[1.6fr_1fr]">
            <CashFlowChart data={monthlyData} />
            <SpendingChart data={spendingData} />
          </section>

          <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[1.3fr_0.7fr]">
            <BudgetChart data={budgetData} />
            <Watchlist data={watchlist} />
          </section>

          {/* Insights Section */}
          <section className="mt-8">
            <SectionCard
              title="Financial Insights"
              subtitle="Key observations from your financial data"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-2xl bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-6 dark:from-blue-50 dark:to-blue-100/50">
                  <h4 className="text-lg font-bold text-slate-100 dark:text-slate-900 mb-2">Highest Spending Category</h4>
                  <p className="text-3xl font-bold text-blue-400 dark:text-blue-600 mb-1">
                    {insights.highestSpendingCategory.category || 'N/A'}
                  </p>
                  <p className="text-sm text-slate-300 dark:text-slate-600">
                    ${insights.highestSpendingCategory.amount?.toLocaleString() || 0} spent
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-emerald-900/50 to-emerald-800/50 p-6 dark:from-emerald-50 dark:to-emerald-100/50">
                  <h4 className="text-lg font-bold text-slate-100 dark:text-slate-900 mb-2">Monthly Comparison</h4>
                  <p className={`text-3xl font-bold mb-1 ${
                    insights.monthlyComparison.change >= 0 ? 'text-rose-400 dark:text-rose-600' : 'text-emerald-400 dark:text-emerald-600'
                  }`}>
                    {insights.monthlyComparison.change >= 0 ? '+' : ''}
                    {insights.monthlyComparison.change.toFixed(1)}%
                  </p>
                  <p className="text-sm text-slate-300 dark:text-slate-600">
                    vs last month (${insights.monthlyComparison.last?.toLocaleString() || 0})
                  </p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-6 dark:from-purple-50 dark:to-purple-100/50">
                  <h4 className="text-lg font-bold text-slate-100 dark:text-slate-900 mb-2">Income vs Expenses</h4>
                  <p className="text-3xl font-bold text-purple-400 dark:text-purple-600 mb-1">
                    ${(insights.totalIncome - insights.totalExpenses).toLocaleString()}
                  </p>
                  <p className="text-sm text-slate-300 dark:text-slate-600">
                    Net savings this period
                  </p>
                </div>
              </div>
            </SectionCard>
          </section>

          <section className="mt-8 grid grid-cols-1 gap-8 xl:grid-cols-[1.4fr_0.6fr]">
            <TransactionsTable />
            <GoalsCard goals={goals} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default FinanceDashboardUI;