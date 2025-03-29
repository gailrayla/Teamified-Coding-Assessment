import { useEffect, useState } from "react";
import Transaction from "@/types/transaction";
import { TransactionItem } from "./transaction-item";
import { formatDate } from "@/utils/format";

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/transactions")
      .then((res) => res.json())
      .then((data) => {
        // Sort transactions by date in descending order
        const sortedTransactions = data.sort(
          (a: Transaction, b: Transaction) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setTransactions(sortedTransactions);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  // Group transactions by date
  const groupedTransactions = transactions.reduce<
    Record<string, Transaction[]>
  >((acc, transaction) => {
    acc[transaction.date] = acc[transaction.date] || [];
    acc[transaction.date].push(transaction);
    return acc;
  }, {});

  return (
    <div>
      {Object.entries(groupedTransactions).map(([date, transactions]) => (
        <div key={date} style={{ marginBottom: "20px" }}>
          <h2
            style={{
              fontSize: "16px",
              margin: "16px 0 8px",
              fontWeight: "normal",
            }}
          >
            {formatDate(date)}
          </h2>
          <ul style={{ padding: "0", listStyle: "none" }}>
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
