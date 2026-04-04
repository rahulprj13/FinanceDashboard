export const monthlyData = [
  { month: "Jan", income: 4200, expense: 2900, balance: 1300 },
  { month: "Feb", income: 4600, expense: 3100, balance: 1500 },
  { month: "Mar", income: 4800, expense: 3600, balance: 1200 },
  { month: "Apr", income: 5200, expense: 3400, balance: 1800 },
  { month: "May", income: 5700, expense: 3900, balance: 1800 },
  { month: "Jun", income: 6100, expense: 4100, balance: 2000 },
  { month: "Jul", income: 6400, expense: 4300, balance: 2100 },
];

export const spendingData = [
  { name: "Housing", value: 35 },
  { name: "Food", value: 18 },
  { name: "Transport", value: 12 },
  { name: "Utilities", value: 15 },
  { name: "Entertainment", value: 10 },
  { name: "Savings", value: 10 },
];

export const budgetData = [
  { category: "Needs", planned: 3200, actual: 2980 },
  { category: "Wants", planned: 1200, actual: 1470 },
  { category: "Savings", planned: 1600, actual: 1720 },
  { category: "Investments", planned: 900, actual: 840 },
];

export const transactions = [
  {
    id: 1,
    title: "Salary Credit",
    category: "Income",
    amount: 4200,
    date: "01 Apr 2026",
    status: "Completed",
    type: "credit",
  },
  {
    id: 2,
    title: "Rent Payment",
    category: "Housing",
    amount: 1200,
    date: "02 Apr 2026",
    status: "Completed",
    type: "debit",
  },
  {
    id: 3,
    title: "Netflix Subscription",
    category: "Entertainment",
    amount: 19,
    date: "03 Apr 2026",
    status: "Completed",
    type: "debit",
  },
  {
    id: 4,
    title: "Freelance Payment",
    category: "Income",
    amount: 800,
    date: "04 Apr 2026",
    status: "Pending",
    type: "credit",
  },
  {
    id: 5,
    title: "Grocery Store",
    category: "Food",
    amount: 126,
    date: "04 Apr 2026",
    status: "Completed",
    type: "debit",
  },
];

export const watchlist = [
  { symbol: "AAPL", name: "Apple Inc.", price: "$198.21", change: "+2.14%" },
  { symbol: "TSLA", name: "Tesla", price: "$173.84", change: "-1.08%" },
  { symbol: "NVDA", name: "NVIDIA", price: "$914.77", change: "+3.25%" },
  { symbol: "BTC", name: "Bitcoin", price: "$69,480", change: "+1.73%" },
];

export const goals = [
  { name: "Emergency Fund", value: 72 },
  { name: "Vacation Savings", value: 48 },
  { name: "New Laptop", value: 63 },
];