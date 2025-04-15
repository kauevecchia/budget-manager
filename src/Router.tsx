import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/app";
import { Dashboard } from "./pages/dashboard";
import { Budget } from "./pages/budget";
import { Transactions } from "./pages/transactions";
import { Analytics } from "./pages/analytics";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="budget" element={<Budget />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
