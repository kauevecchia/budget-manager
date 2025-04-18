export function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
}

export function parseCurrency(input: string | number) {
  const str = String(input);
  const numeric = str.replace(/\D/g, "");
  return Number(numeric) / 100;
}
