import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BudgetProvider } from "./context/budgetContext";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <BudgetProvider>
          <Toaster richColors />
          <Router />
        </BudgetProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
