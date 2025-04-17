import { Label } from "@radix-ui/react-label";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { DollarSign } from "lucide-react";

export function Budget() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Budget</h1>
      <div>
        <form className="flex flex-col gap-2 w-full md:w-1/2">
          <Label>Enter your current budget</Label>
          <Input
            type="number"
            placeholder="Enter amount, e.g. 1000.25"
            min={0}
            step={0.1}
            className="focus:outline-none border border-transparent focus:border-red"
          />
          <Button className="cursor-pointer max-w-48 text-left">
            <DollarSign />
            Set budget
          </Button>
        </form>
      </div>
    </div>
  );
}
