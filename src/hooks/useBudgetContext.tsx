import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";

export function useBudgetContext() {
  const { budget, setBudget, addTransaction, removeTransaction, transactions } =
    useContext(BudgetContext);

  return {};
}
