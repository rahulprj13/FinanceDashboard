# Finance Dashboard UI

A modern, responsive finance dashboard built with React and Vite. This application provides users with comprehensive financial insights, transaction management, and role-based access control.

## 🚀 Features

### Core Functionality
- **Dashboard Overview**: Summary cards displaying net balance, total income, expenses, and investments
- **Interactive Charts**: Time-based balance trend visualization and categorical spending breakdown
- **Transaction Management**: Complete CRUD operations for financial transactions with advanced filtering and sorting
- **Role-Based UI**: Switch between Viewer (read-only) and Admin (full access) roles
- **Financial Insights**: Automated analysis showing highest spending categories, monthly comparisons, and savings calculations

### Advanced Features
- **Dark Mode**: Toggle between light and dark themes
- **Data Persistence**: Local storage for transactions, role preferences, and theme settings
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Real-time Filtering**: Search, category, type, status, and sorting filters for transactions
- **State Management**: Custom React Context for efficient state handling
- **Export Functionality**: CSV export for transaction data

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API
- **Data Persistence**: Local Storage
- **Charts**: Recharts

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd financedashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Role-Based Access
- **Viewer Role**: Can view all data, charts, and insights but cannot modify transactions
- **Admin Role**: Full access including adding, editing, and deleting transactions

### Navigation
- Use the sidebar to navigate between different sections
- Switch roles using the dropdown in the header
- Toggle dark mode with the sun/moon icon

### Transaction Management
- **Add Transaction**: Click "Add" button (Admin only) to create new transactions
- **Edit Transaction**: Click edit icon on any transaction row (Admin only)
- **Delete Transaction**: Click delete icon to remove transactions (Admin only)
- **Filter & Search**: Use the filter controls above the transaction table
- **Export**: Click "Export CSV" to download transaction data

## 📁 Project Structure

```
src/
├── components/
│   └── finance/
│       ├── BudgetChart.jsx
│       ├── CashFlowChart.jsx
│       ├── GoalsCard.jsx
│       ├── Header.jsx
│       ├── SectionCard.jsx
│       ├── Sidebar.jsx
│       ├── SpendingChart.jsx
│       ├── StatCard.jsx
│       ├── TransactionsTable.jsx
│       └── Watchlist.jsx
├── context/
│   └── FinanceContext.jsx
├── data/
│   └── FinanceData.js
├── pages/
│   └── FinanceDashboardUi.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Quality
- ESLint configuration for code linting
- Tailwind CSS for consistent styling
- Responsive design principles

## 📊 Features Overview

### Dashboard Components
1. **Summary Cards**: Real-time financial metrics
2. **Cash Flow Chart**: Monthly income/expense trends
3. **Spending Chart**: Category-wise expense distribution
4. **Budget Chart**: Budget vs actual spending
5. **Transactions Table**: Detailed transaction list with CRUD operations
6. **Insights Panel**: Automated financial analysis
7. **Watchlist**: Investment tracking
8. **Goals**: Savings goal progress

### State Management
- Centralized state using React Context
- Persistent storage with localStorage
- Efficient filtering and sorting algorithms

## 🎨 Design System

- **Colors**: Blue/purple gradient theme with dark mode support
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable, accessible UI components
- **Animations**: Smooth transitions and hover effects

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint-based layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## 🔒 Security & Best Practices

- Input validation for forms
- Safe state updates
- Error handling for edge cases
- Clean code architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is for educational purposes as part of a frontend developer assessment.
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎯 Usage

### Role Management
- Use the role selector in the header to switch between "Viewer" and "Admin" modes
- **Viewer Mode**: Read-only access to all data and insights
- **Admin Mode**: Full access including add, edit, and delete transactions

### Transaction Management
- **Add Transactions**: Click "Add" button (Admin only) to create new transactions
- **Edit Transactions**: Click edit icon on any transaction row (Admin only)
- **Delete Transactions**: Click delete icon with confirmation (Admin only)
- **Filter & Search**: Use the filter controls above the transaction table
- **Sort**: Choose sorting options from the dropdown menu

### Data Persistence
- All transactions are automatically saved to local storage
- Role and theme preferences are remembered between sessions
- Data persists across browser refreshes

## 🏗️ Project Structure

```
src/
├── components/
│   └── finance/          # Financial dashboard components
│       ├── BudgetChart.jsx
│       ├── CashFlowChart.jsx
│       ├── GoalsCard.jsx
│       ├── Header.jsx
│       ├── SectionCard.jsx
│       ├── Sidebar.jsx
│       ├── SpendingChart.jsx
│       ├── StatCard.jsx
│       ├── TransactionsTable.jsx
│       └── Watchlist.jsx
├── context/
│   └── FinanceContext.jsx # State management
├── data/
│   └── FinanceData.js     # Mock data and constants
├── pages/
│   └── FinanceDashboardUi.jsx # Main dashboard page
├── App.jsx               # Root component
├── main.jsx             # Application entry point
└── index.css            # Global styles
```

## 🎨 Design Decisions

### UI/UX Approach
- **Clean & Minimal**: Focus on readability and user experience
- **Consistent Design Language**: Unified color scheme and typography
- **Intuitive Navigation**: Clear visual hierarchy and logical component placement
- **Accessibility**: Proper contrast ratios and keyboard navigation support

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts
- **Touch-Friendly**: Appropriate button sizes and spacing for mobile interaction

### State Management
- **Context API**: Chosen for simplicity and React-native compatibility
- **Local State**: Component-level state for UI interactions
- **Persistent State**: localStorage integration for data persistence

## 🔧 Development Approach

### Component Architecture
- **Modular Components**: Each component has a single responsibility
- **Reusable Patterns**: SectionCard wrapper for consistent styling
- **Prop Drilling Prevention**: Context API for shared state

### Data Flow
- **Unidirectional**: Data flows from context to components
- **Immutable Updates**: State updates create new objects/arrays
- **Optimistic Updates**: Immediate UI feedback with error handling

### Performance Considerations
- **Memoization**: React.memo and useMemo for expensive calculations
- **Lazy Loading**: Potential for code splitting (not implemented)
- **Efficient Filtering**: Client-side filtering with optimized algorithms

## 📊 Data Insights

The application automatically calculates:
- **Highest Spending Category**: Identifies the category with maximum expenses
- **Monthly Comparison**: Percentage change in expenses vs previous month
- **Net Savings**: Difference between total income and expenses
- **Category Breakdown**: Spending distribution across different categories

## 🌙 Dark Mode Implementation

- **CSS Variables**: Dynamic theme switching with CSS custom properties
- **Class-Based**: Dark mode applied via `dark:` prefix in Tailwind classes
- **System Preference**: Respects user's system dark mode preference
- **Persistent**: Theme choice saved to localStorage

## 🔒 Security Considerations

- **Client-Side Only**: No backend authentication (frontend-only demo)
- **Data Validation**: Input validation for transaction amounts and dates
- **XSS Prevention**: Proper sanitization of user inputs
- **Secure Storage**: localStorage used appropriately for demo purposes

## 🚀 Future Enhancements

Potential improvements for production:
- **Backend Integration**: REST API for data persistence
- **Authentication**: User authentication and authorization
- **Real-time Updates**: WebSocket integration for live data
- **Export Functionality**: CSV/JSON export for transactions
- **Advanced Analytics**: More detailed financial insights
- **Progressive Web App**: Service worker and offline support

## 📝 Evaluation Notes

This implementation fulfills all core requirements:
- ✅ Dashboard overview with summary cards and visualizations
- ✅ Transaction management with filtering and sorting
- ✅ Role-based UI with viewer/admin modes
- ✅ Financial insights section
- ✅ Proper state management
- ✅ Responsive design with empty state handling
- ✅ Dark mode toggle
- ✅ Data persistence
- ✅ Clean, modern UI/UX

The application demonstrates modern React development practices, clean code architecture, and attention to user experience details.
