import { useContext } from "react";
import { BudgetContext } from "../context/budgetContext";
import { Transaction } from "../types/transactions";

export function useBudgetContext() {
  const {
    budget,
    setBudget,
    storeBudget,
    userId,
    setUserId,
    addTransaction,
    removeTransaction,
    transactions,
    setTransactions,
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

  const handleStoreBudget = (budget: number) => {
    storeBudget(budget);
  };

  const handleGetCurrentBudget = () => {
    getCurrentBudget();
  };

  const handleSignOut = () => {
    setUserId(null);
  };

  return {
    budget,
    setBudget,
    userId,
    setUserId,
    handleSignOut,
    transactions,
    setTransactions,
    handleStoreBudget,
    handleAddTransaction,
    handleRemoveTransaction,
    handleGetCurrentBudget,
    currentBudget,
    totalIncomes,
    totalExpenses,
    calculatedBudget,
  };
}
