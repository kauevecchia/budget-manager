import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BudgetProvider } from "./context/budgetContext";
import { ThemeProvider } from "next-themes";

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <BudgetProvider>
          <Router />
        </BudgetProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
