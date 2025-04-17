import { useForm, Controller } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { DollarSign } from "lucide-react";

export function Budget() {
  const { control } = useForm();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Your Budget</h1>

      <form className="flex flex-col gap-4 w-full md:w-1/2 p-4">
        <div className="flex flex-col gap-2">
          <Label>Set your current budget</Label>

          <Controller
            name="budget"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <Input type="number" placeholder="Enter budget" {...field} />
            )}
          />
        </div>

        <Button className="cursor-pointer max-w-48 text-left">
          <DollarSign />
          Set budget
        </Button>
      </form>
    </div>
  );
}
