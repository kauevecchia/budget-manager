import { toast } from "sonner";
import { useBudgetContext } from "../hooks/useBudgetContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Trash2 } from "lucide-react";

export function BudgetTable() {
  const { transactions, handleRemoveTransaction } = useBudgetContext();

  const handleButtonClick = (id: number) => {
    try {
      handleRemoveTransaction(id);
      toast.success("Transaction removed successfully!");
    } catch (error) {
      console.error("Error while removing transaction:", error);
      toast.error("Error while removing transaction. Please try again later.");
    }
  };

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
        {transactions.length === 0 ? (
          <TableRow>
            <TableCell
              colSpan={4}
              className="text-center py-4 text-muted-foreground"
            >
              No transactions available
            </TableCell>
          </TableRow>
        ) : (
          transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell
                className={`whitespace-nowrap flex items-center justify-center ${
                  transaction.type === "expense"
                    ? "text-red-700 dark:text-red-800 font-semibold"
                    : "text-green-700 dark:text-green-800 font-semibold"
                }`}
              >
                <p
                  className={
                    transaction.type === "expense"
                      ? "dark:bg-red-300 bg-red-200 px-1.5 py-0.5 rounded-md"
                      : "dark:bg-green-300 bg-green-200 px-1.5 py-0.5 rounded-md"
                  }
                >
                  {transaction.type}
                </p>
              </TableCell>
              <TableCell className="w-full">
                {transaction.description}
              </TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>
                <button
                  className="text-accent-foreground hover:bg-red-600 transition duration-300 rounded-md p-1 hover:text-accent cursor-pointer flex gap-1 items-center justify-center"
                  aria-label="Delete transaction"
                  onClick={() => handleButtonClick(transaction.id)}
                >
                  <Trash2 size={16} />
                </button>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
