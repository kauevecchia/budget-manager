import { createContext, ReactNode, useState } from "react";
import { Transaction } from "../types/transactions";
import { addNewRowToSheet } from "../utils/sheets";

interface BudgetContextType {
  budget: number;
  setBudget: (budget: number) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (id: number) => void;
}

export const BudgetContext = createContext({} as BudgetContextType);

interface BudgetProviderProps {
  children: ReactNode;
}

export function BudgetProvider({ children }: BudgetProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [budget, setBudget] = useState(0);

  function removeTransaction(id: number) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  }

  async function addTransaction(transaction: Transaction) {
    try {
      await addNewRowToSheet({
        type: transaction.type,
        description: transaction.description,
        amount: transaction.amount,
      });

      setTransactions((prev) => [...prev, transaction]);
    } catch (err) {
      console.error("Erro ao adicionar transação na planilha:", err);
    }
  }

  return (
    <BudgetContext.Provider
      value={{
        budget,
        setBudget,
        transactions,
        addTransaction,
        removeTransaction,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
