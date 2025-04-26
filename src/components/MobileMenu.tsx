import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Menu, LogOut } from "lucide-react";
import { useBudgetContext } from "@/hooks/useBudgetContext";
import { toast } from "sonner";

export function MobileMenu() {
  const { handleSignOut } = useBudgetContext();

  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Pages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/budget">Budget</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/transactions">Transactions</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/analytics">Analytics</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="data-[highlighted]:bg-destructive data-[highlighted]:text-white flex items-center gap-2"
          onClick={() => {
            handleSignOut();
            localStorage.removeItem("userId");
            navigate("/login");
            toast.success("See you next time!");
          }}
        >
          Sign Out
          <LogOut className="text-inherit" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
