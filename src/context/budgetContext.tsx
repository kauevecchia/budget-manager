import { createContext, ReactNode, useState } from "react";

export type Transaction = {
  id: number;
  description: string;
  amount: number;
  operation: "expense" | "income";
};

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

  function addTransaction(transaction: Transaction) {
    setTransactions((prev) => [...prev, transaction]);
  }

  return (
    <BudgetContext.Provider
      value={{
        budget: 0,
        setBudget: () => {},
        transactions: [],
        addTransaction: () => {},
        removeTransaction: () => {},
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
