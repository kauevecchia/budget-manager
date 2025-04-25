import { Navigate } from "react-router-dom";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { JSX } from "react";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { userId } = useBudgetContext();

  if (!userId) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
