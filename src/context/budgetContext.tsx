import { createContext, ReactNode, useEffect, useState } from "react";
import { Transaction } from "../types/transactions";
import {
  addBudgetToSheet,
  addNewRowToSheet,
  removeRowFromSheet,
  storeBudgetInSheet,
} from "../utils/sheets";

interface BudgetContextType {
  budget: number;
  setBudget: (budget: number) => void;
  storeBudget: (budget: number) => void;
  userId: string;
  setUserId: (userId: string) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: number) => void;
  currentBudget: number;
  setCurrentBudget: (currentBudget: number) => void;
  getCurrentBudget: () => void;
  totalIncomes: number;
  totalExpenses: number;
  calculatedBudget: number;
}

export const BudgetContext = createContext({} as BudgetContextType);

interface BudgetProviderProps {
  children: ReactNode;
}

export function BudgetProvider({ children }: BudgetProviderProps) {
  const [userId, setUserId] = useState<string>("");
  const [transactions, setTransactions] = useState<Transaction[]>(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  );
  const [budget, setBudget] = useState<number>(
    JSON.parse(localStorage.getItem("budget") || "0")
  );
  const [currentBudget, setCurrentBudget] = useState<number>(0);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [transactions, budget]);

  const totalIncomes = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const calculatedBudget = budget + totalIncomes - totalExpenses;

  async function removeTransaction(id: number) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );

    try {
      removeRowFromSheet(id);
    } catch (err) {
      console.error(
        "Error while removing transaction from the spreadsheet:",
        err
      );
    }
  }

  async function addTransaction(transaction: Transaction) {
    setTransactions((prev) => [...prev, transaction]);

    try {
      await addNewRowToSheet({
        userId: userId,
        id: transaction.id,
        type: transaction.type,
        description: transaction.description,
        amount: transaction.amount,
      });
    } catch (err) {
      console.error("Error while adding transaction to the spreadsheet:", err);
    }
  }

  async function storeBudget(budget: number) {
    setBudget(budget);

    try {
      await addBudgetToSheet({
        userId: userId,
        budget: budget,
      });
    } catch (err) {
      console.error("Error while storing budget to the spreadsheet", err);
    }
  }

  function getCurrentBudget() {
    setCurrentBudget(calculatedBudget);
  }

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        storeBudget,
        userId,
        setUserId,
        transactions,
        addTransaction,
        removeTransaction,
        currentBudget,
        setCurrentBudget,
        getCurrentBudget,
        totalIncomes,
        totalExpenses,
        calculatedBudget,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
