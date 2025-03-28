export type Transaction = {
  id: number;
  date: string;
  logoUrl: string;
  transactionTitle: string;
  suburb?: string;
  shortCategory?: string;
  amount: number;
  cashflow: "inflow" | "outflow";
};

export default Transaction;
