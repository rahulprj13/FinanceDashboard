import React from "react";
import {
  LayoutDashboard,
  Wallet,
  CreditCard,
  Receipt,
  PieChart as PieChartIcon,
  Landmark,
  Settings,
  CircleDollarSign,
  User,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Wallet, label: "Accounts" },
  { icon: CreditCard, label: "Cards" },
  { icon: Receipt, label: "Transactions" },
  { icon: PieChartIcon, label: "Budgets" },
  { icon: Landmark, label: "Investments" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = ({ activeMenu, setActiveMenu }) => {
 return (
  <aside className="sticky top-0 h-screen overflow-y-auto scrollbar-thin border-r border-slate-700 bg-slate-950 text-slate-100 shadow-2xl dark:border-slate-200 dark:bg-white dark:text-slate-900">
    <div className="flex items-center gap-3 px-6 py-8">
      <div className="rounded-2xl bg-linear-to-br from-blue-500 to-purple-600 p-3 shadow-lg">
        <CircleDollarSign className="h-6 w-6 text-white" />
      </div>
      <div>
        <p className="text-lg font-bold text-slate-100 dark:text-slate-900">Finora</p>
        <p className="text-sm text-slate-400 dark:text-slate-600">Finance Dashboard</p>
      </div>
    </div>

    <nav className="mt-6 space-y-2 px-6">
      {menu.map(({ icon: Icon, label }) => {
        const active = activeMenu === label;
        return (
          <button
            key={label}
            onClick={() => setActiveMenu(label)}
            className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-200 ${
              active
                ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "text-slate-300 hover:bg-slate-800 hover:text-slate-100 dark:text-slate-700 dark:hover:bg-slate-100 dark:hover:text-slate-900"
            }`}
          >
            <Icon
              className={`h-5 w-5 transition-transform duration-200 ${
                active ? "scale-110" : "group-hover:scale-105"
              }`}
            />
            <span className="font-medium">{label}</span>
          </button>
        );
      })}
    </nav>

    <div className="mt-12 rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-sm dark:border-slate-200 dark:bg-white">
      <p className="text-sm font-medium text-slate-300 dark:text-slate-700">Current Balance</p>
      <h3 className="mt-2 text-3xl font-bold text-slate-100 dark:text-slate-900">$24,560.00</h3>
      <p className="mt-2 text-sm font-medium text-emerald-400 dark:text-emerald-600">+12.8% from last month</p>
      <button className="mt-5 w-full rounded-2xl bg-linear-to-r from-blue-600 to-purple-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg">
        Add Transaction
      </button>
    </div>

    <div className="mt-8 rounded-3xl border border-slate-700 bg-slate-900 p-5 shadow-sm dark:border-slate-200 dark:bg-white">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl border border-slate-700 bg-blue-900/30 p-2.5 dark:border-slate-200 dark:bg-blue-50">
          <User className="h-5 w-5 text-slate-100 dark:text-slate-900" />
        </div>
        <div>
          <p className="font-semibold text-slate-100 dark:text-slate-900">Montu Prajapati</p>
          <p className="text-sm text-slate-400 dark:text-slate-600">Frontend Developer</p>
        </div>
      </div>
    </div>
  </aside>
);
};

export default Sidebar;