import React, { createContext, useContext, useState, useEffect } from 'react';
import { transactions as initialTransactions } from '../data/FinanceData';

const FinanceContext = createContext();

export const useFinance = () => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance must be used within a FinanceProvider');
  }
  return context;
};

export const FinanceProvider = ({ children }) => {
  
  const [transactions, setTransactions] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTransactions = localStorage.getItem('financeTransactions');
      return savedTransactions ? JSON.parse(savedTransactions) : initialTransactions;
    }
    return initialTransactions;
  });
  const [role, setRole] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('financeRole') || 'viewer';
    }
    return 'viewer';
  });
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedDarkMode = localStorage.getItem('financeDarkMode');
      return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    }
    return false;
  });
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    type: 'all',
    status: 'all',
    sortBy: 'date',
    sortOrder: 'desc'
  });

  // Initialize dark mode on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('financeTransactions', JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem('financeRole', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('financeDarkMode', JSON.stringify(darkMode));
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode]);

  const addTransaction = (transaction) => {
    setTransactions(prev => [...prev, { ...transaction, id: Date.now() }]);
  };

  const updateTransaction = (id, updatedTransaction) => {
    setTransactions(prev =>
      prev.map(t => t.id === id ? { ...t, ...updatedTransaction } : t)
    );
  };

  const deleteTransaction = (id) => {
    setTransactions(prev => prev.filter(t => t.id !== id));
  };

  const filteredTransactions = transactions
    .filter(t => {
      const matchesSearch = t.title.toLowerCase().includes(filters.search.toLowerCase()) ||
                           t.category.toLowerCase().includes(filters.search.toLowerCase());
      const matchesCategory = filters.category === 'all' || t.category === filters.category;
      const matchesType = filters.type === 'all' || t.type === filters.type;
      const matchesStatus = filters.status === 'all' || t.status === filters.status;
      return matchesSearch && matchesCategory && matchesType && matchesStatus;
    })
    .sort((a, b) => {
      let aVal, bVal;
      switch (filters.sortBy) {
        case 'date':
          aVal = new Date(a.date);
          bVal = new Date(b.date);
          break;
        case 'amount':
          aVal = a.amount;
          bVal = b.amount;
          break;
        case 'title':
          aVal = a.title.toLowerCase();
          bVal = b.title.toLowerCase();
          break;
        default:
          return 0;
      }
      if (filters.sortOrder === 'asc') {
        return aVal > bVal ? 1 : -1;
      } else {
        return aVal < bVal ? 1 : -1;
      }
    });

  const insights = {
    highestSpendingCategory: (() => {
      const expenses = transactions.filter(t => t.type === 'debit');
      const categoryTotals = expenses.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] || 0) + t.amount;
        return acc;
      }, {});
      const maxCategory = Object.keys(categoryTotals).reduce((a, b) =>
        categoryTotals[a] > categoryTotals[b] ? a : b, ''
      );
      return { category: maxCategory, amount: categoryTotals[maxCategory] || 0 };
    })(),
    monthlyComparison: (() => {
      const currentMonth = new Date().getMonth();
      const lastMonth = currentMonth - 1;
      const currentMonthExpenses = transactions
        .filter(t => t.type === 'debit' && new Date(t.date).getMonth() === currentMonth)
        .reduce((sum, t) => sum + t.amount, 0);
      const lastMonthExpenses = transactions
        .filter(t => t.type === 'debit' && new Date(t.date).getMonth() === lastMonth)
        .reduce((sum, t) => sum + t.amount, 0);
      const change = lastMonthExpenses ? ((currentMonthExpenses - lastMonthExpenses) / lastMonthExpenses * 100) : 0;
      return { current: currentMonthExpenses, last: lastMonthExpenses, change };
    })(),
    totalIncome: transactions.filter(t => t.type === 'credit').reduce((sum, t) => sum + t.amount, 0),
    totalExpenses: transactions.filter(t => t.type === 'debit').reduce((sum, t) => sum + t.amount, 0),
  };

  return (
    <FinanceContext.Provider value={{
      transactions: filteredTransactions,
      allTransactions: transactions,
      role,
      setRole,
      darkMode,
      setDarkMode,
      filters,
      setFilters,
      addTransaction,
      updateTransaction,
      deleteTransaction,
      insights
    }}>
      {children}
    </FinanceContext.Provider>
  );
};