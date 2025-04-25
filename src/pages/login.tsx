import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useBudgetContext } from "../hooks/useBudgetContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { Banknote, PiggyBank, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { fetchUserData } from "../utils/sheets";

export function Login() {
  const [displayError, setDisplayError] = useState(false);
  const { setUserId, setTransactions, setBudget } = useBudgetContext();
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="p-8 w-full max-w-2xl bg-white rounded-xl shadow-lg flex flex-col items-center gap-6"
      >
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="flex items-center text-accent gap-2">
            <h1 className="text-3xl font-bold">Welcome to Budget Manager</h1>
            <Banknote className="hidden md:block" />
          </div>
          <p className="text-gray-600 text-sm max-w-md">
            Take control of your finances with ease. Track your expenses, set
            your budget, and gain insights into your spending — all in one
            place.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-gray-700">
          <div className="flex flex-col items-center gap-1">
            <PiggyBank className="text-green-600" />
            Set budgets
          </div>
          <div className="flex flex-col items-center gap-1">
            <BarChart2 className="text-blue-600" />
            Track expenses
          </div>
          <div className="flex flex-col items-center gap-1">
            <Banknote className="text-yellow-500" />
            Visualize spending
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <GoogleLogin
            theme="outline"
            size="large"
            shape="pill"
            text="continue_with"
            onSuccess={async (credentialResponse) => {
              const decoded = jwtDecode<{ sub: string }>(
                credentialResponse.credential!
              );
              const userId = parseFloat(decoded.sub);

              setUserId(userId);

              try {
                const { budget, transactions } = await fetchUserData(userId);

                const latestBudget =
                  Array.isArray(budget) && budget.length > 0
                    ? Number(budget[0])
                    : Number(budget);

                if (!isNaN(latestBudget) && latestBudget > 0) {
                  setBudget(latestBudget);
                }

                const validTransactions = Array.isArray(transactions)
                  ? transactions.filter(
                      (t) =>
                        typeof t === "object" &&
                        !Array.isArray(t) &&
                        typeof t.amount === "number"
                    )
                  : [];

                if (validTransactions.length > 0) {
                  setTransactions(validTransactions);
                }

                toast.success("Logged in. Let's manage that budget!");
                navigate("/budget");
              } catch (error) {
                toast.error("Failed to fetch your data. Try again.");
                console.error("Error fetching user data:", error);
              }
            }}
            onError={() => setDisplayError(true)}
          />
          {displayError && (
            <p className="text-red-600 text-sm">Login failed, try again</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}
