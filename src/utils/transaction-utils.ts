import Transaction from "@/types/transaction";
import { FilterType } from "@/types/filters";

export const filterTransactions = (
  transactions: Transaction[],
  filter: FilterType
): Transaction[] => {
  if (filter === "all") return transactions;
  return transactions.filter((transaction) => transaction.cashflow === filter);
};

export const groupTransactionsByDate = (
  transactions: Transaction[]
): Record<string, Transaction[]> => {
  return transactions.reduce<Record<string, Transaction[]>>(
    (acc, transaction) => {
      acc[transaction.date] = acc[transaction.date] || [];
      acc[transaction.date].push(transaction);
      return acc;
    },
    {}
  );
};
