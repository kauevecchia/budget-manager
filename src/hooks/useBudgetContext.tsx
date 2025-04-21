import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { Transaction } from "../types/transactions";

export function useBudgetContext() {
  const {
    budget,
    setBudget,
    addTransaction,
    removeTransaction,
    transactions,
    getCurrentBudget,
    currentBudget,
  } = useContext(BudgetContext);

  const handleRemoveTransaction = (id: number) => {
    removeTransaction(id);
  };

  const handleAddTransaction = (transaction: Transaction) => {
    addTransaction(transaction);
  };

  const handleSetBudget = (budget: number) => {
    setBudget(budget);
  };

  const handleGetCurrentBudget = () => {
    getCurrentBudget();
  };

  return {
    budget,
    transactions,
    handleSetBudget,
    handleAddTransaction,
    handleRemoveTransaction,
    handleGetCurrentBudget,
    currentBudget,
  };
}
