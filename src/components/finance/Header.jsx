import React from "react";
import { Search, Bell, Settings, ChevronDown, Moon, Sun } from "lucide-react";
import { useFinance } from "../../context/FinanceContext";

const Header = () => {
  const { role, setRole, darkMode, setDarkMode } = useFinance();

  return (
    <header className="mb-8 flex flex-col gap-6 rounded-3xl bg-slate-900 p-6 shadow-lg ring-1 ring-slate-700 backdrop-blur-sm md:flex-row md:items-center md:justify-between dark:bg-white dark:ring-slate-200">
      <div>
        <p className="text-sm font-medium text-slate-400 dark:text-slate-600">Welcome back</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-100 dark:text-slate-900">
          Financial Overview
        </h1>
        <p className="mt-1 text-sm text-slate-400 dark:text-slate-600">
          Here's what's happening with your money today.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="appearance-none rounded-2xl border border-slate-600 bg-slate-800 px-4 py-3 pr-8 text-sm font-medium text-slate-100 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-700 hover:shadow-md focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-100 dark:border-slate-200 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-50"
            >
              <option value="viewer">Viewer</option>
              <option value="admin">Admin</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none" />
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-2xl border border-slate-600 bg-slate-800 p-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-700 hover:shadow-md dark:border-slate-200 dark:bg-white dark:hover:bg-slate-50"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-amber-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-400" />
            )}
          </button>

          <button className="rounded-2xl border border-slate-600 bg-slate-800 p-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-700 hover:shadow-md dark:border-slate-200 dark:bg-white dark:hover:bg-slate-50">
            <Bell className="h-5 w-5 text-slate-300 dark:text-slate-700" />
          </button>

          <button className="rounded-2xl border border-slate-600 bg-slate-800 p-3 shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-slate-700 hover:shadow-md dark:border-slate-200 dark:bg-white dark:hover:bg-slate-50">
            <Settings className="h-5 w-5 text-slate-300 dark:text-slate-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;