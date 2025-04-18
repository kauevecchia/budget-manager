import { useContext } from "react";
import { BudgetContext, Transaction } from "../context/budgetContext";

export function useBudgetContext() {
  const { budget, setBudget, addTransaction, removeTransaction, transactions } =
    useContext(BudgetContext);

  const handleRemoveTransaction = (id: number) => {
    removeTransaction(id);
  };

  const handleAddTransaction = (transaction: Transaction) => {
    addTransaction(transaction);
  };

  const handleSetBudget = (budget: number) => {
    setBudget(budget);
  };

  return {};
}
