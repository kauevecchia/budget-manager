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
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">
          Light
          <Sun />
        </SelectItem>
        <SelectItem value="dark">
          Dark
          <Moon />
        </SelectItem>
        <SelectItem value="system">
          System
          <Laptop />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
