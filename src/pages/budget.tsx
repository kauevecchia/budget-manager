import { useForm, Controller } from "react-hook-form";
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { DollarSign } from "lucide-react";

function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

function parseCurrency(input: string | number) {
  const str = String(input);
  const numeric = str.replace(/\D/g, "");
  return Number(numeric) / 100;
}

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
            render={({ field }) => {
              const formatted =
                field.value === 0 ? "" : formatCurrency(field.value);

              return (
                <Input
                  type="text"
                  placeholder="Enter amount (e.g. $1,000.00)"
                  value={formatted}
                  onChange={(e) => {
                    const raw = parseCurrency(e.target.value);
                    field.onChange(raw);
                  }}
                />
              );
            }}
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
