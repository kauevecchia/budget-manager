import {
  Wallet,
  ArrowRightLeft,
  ChartPie,
  ChartNoAxesColumn,
} from "lucide-react";
import { SidebarItem } from "./SidebarItem";
import { BudgetProgressBar } from "./BudgetProgressBar";

export function Sidebar() {
  return (
    <div className="hidden lg:flex flex-col h-4/6 flex-grow bg-background text-foreground p-4">
      <nav className="flex flex-col space-y-2 flex-grow">
        <ul className="flex flex-col gap-4">
          <SidebarItem to="/budget">
            <Wallet />
            Budget
          </SidebarItem>
          <SidebarItem to="/transactions">
            <ArrowRightLeft />
            Transactions
          </SidebarItem>
          <SidebarItem to="/dashboard">
            <ChartPie />
            Dashboard
          </SidebarItem>
          <SidebarItem to="/analytics">
            <ChartNoAxesColumn />
            Analytics
          </SidebarItem>
        </ul>
      </nav>
      <div className="hidden md:block md:text-left md:pr-12">
        <BudgetProgressBar />
      </div>
    </div>
  );
}
