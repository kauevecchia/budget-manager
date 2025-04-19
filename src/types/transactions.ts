export interface Transaction {
  id: number;
  type: string;
  description: string;
  amount: number;
}

export type TransactionForSheet = Omit<Transaction, "id">;
