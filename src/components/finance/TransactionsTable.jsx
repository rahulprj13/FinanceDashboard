import React, { useEffect, useMemo, useState } from "react";
import SectionCard from "./SectionCard";
import {
  ArrowUpRight,
  ArrowDownLeft,
  Plus,
  Edit,
  Trash2,
  Search,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useFinance } from "../../context/FinanceContext";

const TransactionsTable = () => {
  const {
    transactions,
    role,
    filters,
    setFilters,
    addTransaction,
    updateTransaction,
    deleteTransaction,
  } = useFinance();

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    date: "",
    status: "Completed",
    type: "debit",
  });

  const handleAdd = () => {
    if (formData.title && formData.category && formData.amount && formData.date) {
      addTransaction({
        ...formData,
        amount: parseFloat(formData.amount),
      });
      setFormData({
        title: "",
        category: "",
        amount: "",
        date: "",
        status: "Completed",
        type: "debit",
      });
      setShowAddForm(false);
    }
  };

  const handleEdit = (transaction) => {
    setEditingTransaction(transaction);
    setFormData({
      title: transaction.title,
      category: transaction.category,
      amount: transaction.amount.toString(),
      date: transaction.date,
      status: transaction.status,
      type: transaction.type,
    });
  };

  const handleUpdate = () => {
    if (
      editingTransaction &&
      formData.title &&
      formData.category &&
      formData.amount &&
      formData.date
    ) {
      updateTransaction(
        editingTransaction.id || `${editingTransaction.title}-${editingTransaction.date}`,
        {
          ...formData,
          amount: parseFloat(formData.amount),
        }
      );
      setEditingTransaction(null);
      setFormData({
        title: "",
        category: "",
        amount: "",
        date: "",
        status: "Completed",
        type: "debit",
      });
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      deleteTransaction(id);
    }
  };

  const categories = ["all", ...new Set(transactions.map((t) => t.category))];
  const types = ["all", "credit", "debit"];
  const statuses = ["all", "Completed", "Pending"];

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const paginatedTransactions = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return transactions.slice(startIndex, startIndex + itemsPerPage);
  }, [transactions, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.search, filters.category, filters.type, filters.status, filters.sortBy, filters.sortOrder]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <SectionCard
      title="Recent Transactions"
      subtitle="Your latest activity across accounts"
      action={
        <div className="flex gap-2">
          {role === "admin" && (
            <button
              onClick={() => setShowAddForm(true)}
              className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md"
            >
              <Plus className="h-4 w-4" />
              Add
            </button>
          )}
          <button className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-200 hover:bg-slate-50 hover:shadow-md">
            View All
          </button>
        </div>
      }
    >
      <div className="mb-6 flex flex-wrap gap-4">
        <div className="min-w-[200px] flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search transactions..."
              value={filters.search}
              onChange={(e) => setFilters((prev) => ({ ...prev, search: e.target.value }))}
              className="w-full rounded-xl border border-slate-200 bg-white px-10 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            />
          </div>
        </div>

        <select
          value={filters.category}
          onChange={(e) => setFilters((prev) => ({ ...prev, category: e.target.value }))}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <select
          value={filters.type}
          onChange={(e) => setFilters((prev) => ({ ...prev, type: e.target.value }))}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type === "all" ? "All Types" : type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>

        <select
          value={filters.status}
          onChange={(e) => setFilters((prev) => ({ ...prev, status: e.target.value }))}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === "all" ? "All Statuses" : status}
            </option>
          ))}
        </select>

        <select
          value={`${filters.sortBy}-${filters.sortOrder}`}
          onChange={(e) => {
            const [sortBy, sortOrder] = e.target.value.split("-");
            setFilters((prev) => ({ ...prev, sortBy, sortOrder }));
          }}
          className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
        >
          <option value="date-desc">Date (Newest)</option>
          <option value="date-asc">Date (Oldest)</option>
          <option value="amount-desc">Amount (High)</option>
          <option value="amount-asc">Amount (Low)</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>
      </div>

      {(showAddForm || editingTransaction) && (
        <div className="mb-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-600 dark:bg-slate-800">
          <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">
            {editingTransaction ? "Edit Transaction" : "Add New Transaction"}
          </h4>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              placeholder="Title"
              value={formData.title}
              onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Category"
              value={formData.category}
              onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            />
            <input
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(e) => setFormData((prev) => ({ ...prev, amount: e.target.value }))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            />
            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            />
            <select
              value={formData.type}
              onChange={(e) => setFormData((prev) => ({ ...prev, type: e.target.value }))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            >
              <option value="credit">Income</option>
              <option value="debit">Expense</option>
            </select>
            <select
              value={formData.status}
              onChange={(e) => setFormData((prev) => ({ ...prev, status: e.target.value }))}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:focus:border-blue-400"
            >
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={editingTransaction ? handleUpdate : handleAdd}
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              {editingTransaction ? "Update" : "Add"} Transaction
            </button>
            <button
              onClick={() => {
                setShowAddForm(false);
                setEditingTransaction(null);
                setFormData({
                  title: "",
                  category: "",
                  amount: "",
                  date: "",
                  status: "Completed",
                  type: "debit",
                });
              }}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3">
          <thead>
            <tr className="text-left text-sm text-slate-500">
              <th className="pb-2 font-semibold">Transaction</th>
              <th className="pb-2 font-semibold">Category</th>
              <th className="pb-2 font-semibold">Date</th>
              <th className="pb-2 font-semibold">Status</th>
              <th className="pb-2 text-right font-semibold">Amount</th>
              {role === "admin" && <th className="pb-2 font-semibold">Actions</th>}
            </tr>
          </thead>

          <tbody>
            {paginatedTransactions.length === 0 ? (
              <tr>
                <td
                  colSpan={role === "admin" ? 6 : 5}
                  className="py-8 text-center text-slate-500 dark:text-slate-400"
                >
                  No transactions found
                </td>
              </tr>
            ) : (
              paginatedTransactions.map((item) => {
                const positive = item.type === "credit";
                const id = item.id || `${item.title}-${item.date}`;

                return (
                  <tr
                    key={id}
                    className="group rounded-2xl bg-slate-50/50 transition-all duration-200 hover:bg-slate-100/70 hover:shadow-sm dark:bg-slate-800/50 dark:hover:bg-slate-700/70"
                  >
                    <td className="rounded-l-2xl px-4 py-4 font-semibold text-slate-900 dark:text-slate-100">
                      <div className="flex items-center gap-3">
                        <div
                          className={`rounded-full p-2 ${
                            positive
                              ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400"
                              : "bg-rose-50 text-rose-600 dark:bg-rose-900/50 dark:text-rose-400"
                          }`}
                        >
                          {positive ? (
                            <ArrowUpRight className="h-4 w-4" />
                          ) : (
                            <ArrowDownLeft className="h-4 w-4" />
                          )}
                        </div>
                        {item.title}
                      </div>
                    </td>

                    <td className="px-4 py-4 font-medium text-slate-600 dark:text-slate-300">
                      {item.category}
                    </td>
                    <td className="px-4 py-4 font-medium text-slate-600 dark:text-slate-300">
                      {item.date}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          item.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/50 dark:text-emerald-300 dark:ring-emerald-700"
                            : "bg-amber-50 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-900/50 dark:text-amber-300 dark:ring-amber-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td
                      className={`px-4 py-4 text-right text-lg font-bold ${
                        positive
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-rose-600 dark:text-rose-400"
                      }`}
                    >
                      {positive ? "+" : "-"}${item.amount.toLocaleString()}
                    </td>

                    {role === "admin" && (
                      <td className="rounded-r-2xl px-4 py-4">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(item)}
                            className="rounded-lg p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-200"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(id)}
                            className="rounded-lg p-2 text-slate-500 hover:bg-red-100 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/50 dark:hover:text-red-400"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {transactions.length > 0 && (
        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-4 sm:flex-row dark:border-slate-700">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
            {Math.min(currentPage * itemsPerPage, transactions.length)} of {transactions.length} transactions
          </p>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-10 min-w-[40px] rounded-xl px-3 text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </SectionCard>
  );
};

export default TransactionsTable;