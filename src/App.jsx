import React from "react";
import FinanceDashboardUi from "./pages/FinanceDashboardUi";
import { FinanceProvider } from "./context/FinanceContext";

const App = () => {
  return (
    <FinanceProvider>
      <FinanceDashboardUi />
    </FinanceProvider>
  );
};

export default App;