import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="flex justify-between bg-background items-center p-6">
      <h3 className="text-2xl text-foreground font-bold">Budget Manager</h3>
      <Button className="bg-foreground cursor-pointer hover:bg-red-600 transition duration-300">
        Sign Out
      </Button>
    </header>
  );
}
