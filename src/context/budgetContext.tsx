import { createContext, ReactNode, useState } from "react";

type Transaction = {
  id: string;
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

  function removeTransaction(id: string) {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
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
