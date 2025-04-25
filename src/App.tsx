import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { BudgetProvider } from "./context/budgetContext";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

export function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <BrowserRouter>
          <BudgetProvider>
            <Toaster richColors />
            <Router />
          </BudgetProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}
