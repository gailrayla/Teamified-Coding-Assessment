export type Transaction = {
  thriveBankTransactionID: number;
  date: string;
  logoUrl: string;
  transactionTitle: string;
  suburb?: string;
  shortCategory?: string;
  amount: string;
  cashflow: "inflow" | "outflow";
};

export default Transaction;
