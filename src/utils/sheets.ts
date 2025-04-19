import { api } from "../lib/axios";

export async function addNewRowToSheet(data: {
  type: string;
  description: string;
  amount: number;
}) {
  try {
    const response = await api.post("/Transactions", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Erro ao adicionar nova linha na planilha:", error);
    throw error;
  }
}
