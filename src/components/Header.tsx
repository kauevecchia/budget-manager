import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ThemeSelector } from "./ThemeSelector";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="flex justify-between bg-background items-center p-6">
      <Link to={"/dashboard"}>
        <h3 className="md:text-2xl text-foreground font-bold">
          Budget Manager
        </h3>
      </Link>
      <div className="flex items-center gap-2">
        <ThemeSelector />
        <div className="block lg:hidden">
          <MobileMenu />
        </div>
        <Button className="hidden lg:block bg-foreground cursor-pointer hover:bg-destructive transition duration-300">
          Sign Out
        </Button>
      </div>
    </header>
  );
}
