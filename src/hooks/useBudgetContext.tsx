import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { Transaction } from "../types/transactions";

export function useBudgetContext() {
  const {
    budget,
    setBudget,
    userId,
    setUserId,
    addTransaction,
    removeTransaction,
    transactions,
    getCurrentBudget,
    currentBudget,
    totalIncomes,
    totalExpenses,
    calculatedBudget,
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
    userId,
    setUserId,
    transactions,
    handleSetBudget,
    handleAddTransaction,
    handleRemoveTransaction,
    handleGetCurrentBudget,
    currentBudget,
    totalIncomes,
    totalExpenses,
    calculatedBudget,
  };
}
