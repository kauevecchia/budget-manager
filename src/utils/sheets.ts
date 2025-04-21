import { api } from "../lib/axios";
import { Transaction } from "../types/transactions";

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
    const response = await api.delete(`/Transactions/id/${id}`, {
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
