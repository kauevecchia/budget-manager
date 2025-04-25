import { api } from "../lib/axios";
import { Transaction } from "../types/transactions";

interface addBudgetToSheetProps {
  userId: string;
  budget: number;
}

export async function addNewRowToSheet(data: Transaction) {
  try {
    const response = await api.post("/Transactions", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while adding new row in spreadsheet:", error);
    throw error;
  }
}

export async function removeRowFromSheet(id: number) {
  try {
    const queryParams = new URLSearchParams({
      limit: "1",
      query_type: "and",
      id: String(id),
    });

    const url = `/Transactions?${queryParams.toString()}`;

    const response = await api.delete(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while removing row in spreadsheet:", error);
    throw error;
  }
}

export async function addBudgetToSheet(data: addBudgetToSheetProps) {
  try {
    const response = await api.post("/Budget", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error while adding new budget to spreadsheet:", error);
    throw error;
  }
}
