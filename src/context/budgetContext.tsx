import { createContext, ReactNode } from "react";

type Transaction = {
  id: string;
  description: string;
  amount: number;
  transaction: "expense" | "income";
};

interface BudgetContextType {
  budget: number;
  setBudget: (budget: number) => void;
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
  removeTransaction: (index: number) => void;
}

export const BudgetContext = createContext({} as BudgetContextType);

interface BudgetProviderProps {
  children: ReactNode;
}

export function BudgetProvider({ children }: BudgetProviderProps) {
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
