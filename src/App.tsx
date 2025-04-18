import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BudgetProvider } from "./context/budgetContext";

export function App() {
  return (
    <BrowserRouter>
      <BudgetProvider>
        <Router />
      </BudgetProvider>
    </BrowserRouter>
  );
}
