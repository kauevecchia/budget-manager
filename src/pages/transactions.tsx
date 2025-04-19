import { Button } from "../components/ui/button";
import { CircleArrowRight } from "lucide-react";

export function Transactions() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-semibold">Transactions</h1>
      <form className="flex flex-col gap-3 p-4 md:w-1/2">
        <div className="flex flex-col gap-1"></div>
        <div className="flex flex-col gap-1"></div>
        <div className="flex flex-col gap-1"></div>

        <Button type="submit" className="max-w-48 cursor-pointer mt-2">
          Submit
          <CircleArrowRight />
        </Button>
      </form>
    </div>
  );
}
