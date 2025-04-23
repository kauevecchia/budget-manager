import { useTheme } from "next-themes";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Sun, Moon, Laptop } from "lucide-react";

export function ThemeSelector() {
  const { setTheme, theme } = useTheme();

  return (
    <Select onValueChange={setTheme} defaultValue={theme}>
      <SelectTrigger className="w-[70px] md:w-[150px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          <p className="text-xs md:text-base hidden md:block">Light</p>
          <Sun />
        </SelectItem>
        <SelectItem value="dark">
          <p className="text-xs md:text-base hidden md:block">Dark</p>
          <Moon />
        </SelectItem>
        <SelectItem value="system">
          <p className="text-xs md:text-base hidden md:block">System</p>
          <Laptop />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
