import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex justify-between bg-background items-center p-6">
      <Link to={"/dashboard"}>
        <h3 className="text-2xl text-foreground font-bold">Budget Manager</h3>
      </Link>
      <Button className="bg-foreground cursor-pointer hover:bg-red-600 transition duration-300">
        Sign Out
      </Button>
    </header>
  );
}
