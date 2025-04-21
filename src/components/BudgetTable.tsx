import { Trash2 } from "lucide-react";
import { useBudgetContext } from "../hooks/useBudgetContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export function BudgetTable() {
  const { transactions } = useBudgetContext();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Transaction Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.amount}</TableCell>
            <TableCell>
              <button
                className="text-accent-foreground hover:bg-red-600 transition duration-300 rounded-md p-1 hover:text-accent cursor-pointer flex gap-1 items-center justify-center"
                aria-label="Delete transaction"
              >
                <Trash2 size={16} />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
