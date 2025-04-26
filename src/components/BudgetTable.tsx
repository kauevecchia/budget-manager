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
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

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
          <TableHead>
            <span className="hidden md:inline">Transaction</span> Type
          </TableHead>
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
                <Dialog>
                  <DialogTrigger>
                    <button
                      className="text-accent-foreground hover:bg-red-600 transition duration-300 rounded-md p-1 hover:text-accent cursor-pointer flex gap-1 items-center justify-center"
                      aria-label="Delete transaction"
                    >
                      <Trash2 size={16} />
                    </button>
                  </DialogTrigger>

                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Deletion</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this transaction? This
                        action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>

                    <DialogFooter className="flex flex-col md:flex-row">
                      <DialogClose asChild>
                        <Button className="bg-foreground cursor-pointer flex-grow">
                          Cancel
                        </Button>
                      </DialogClose>
                      <Button
                        className="bg-destructive hover:bg-rose-500 cursor-pointer flex-grow"
                        onClick={() => handleButtonClick(transaction.id)}
                      >
                        Delete
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
