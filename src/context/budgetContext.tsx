import { createContext, ReactNode, useState } from "react";
import { Transaction } from "../types/transactions";
import { addNewRowToSheet, removeRowFromSheet } from "../utils/sheets";

interface BudgetContextType {
  budget: number;
  setBudget: (budget: number) => void;
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
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budget, setBudget] = useState(0);
  const [currentBudget, setCurrentBudget] = useState(0);

  const totalIncomes = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const calculatedBudget = budget + totalIncomes - totalExpenses;

  function removeTransaction(id: number) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  async function addTransaction(transaction: Transaction) {
    setTransactions((prev) => [...prev, transaction]);

    try {
      await addNewRowToSheet({
        id: transaction.id,
        type: transaction.type,
        description: transaction.description,
        amount: transaction.amount,
      });
    } catch (err) {
      console.error("Error while adding transaction to the spreadsheet:", err);
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
