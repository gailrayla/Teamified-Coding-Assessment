import Transaction from "@/types/transaction";

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
