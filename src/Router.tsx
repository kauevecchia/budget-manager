import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { Dashboard } from "./pages/dashboard";
import { Budget } from "./pages/budget";
import { Transactions } from "./pages/transactions";
import { Analytics } from "./pages/analytics";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./components/ProtectedRoute";

export function Router() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="budget" element={<Budget />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
