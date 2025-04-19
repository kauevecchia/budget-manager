import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { Transaction } from "../types/transactions";

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

  return {
    budget,
    transactions,
    handleSetBudget,
    handleAddTransaction,
    handleRemoveTransaction,
  };
}
