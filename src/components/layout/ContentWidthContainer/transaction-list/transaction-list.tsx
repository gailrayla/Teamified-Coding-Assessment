import { useEffect, useState } from "react";
import Transaction from "@/types/transaction";
import { TransactionItem } from "./transaction-item";

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/transactions")
      .then((res) => res.json())
      .then((data) => {
        // sort transactions by date in descending order
        const sortedTransactions = data.sort(
          (a: Transaction, b: Transaction) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setTransactions(sortedTransactions);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  // group transactions by date
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
        <div key={date}>
          <h2 style={{ fontSize: "16px", fontWeight: "normal" }}>{date}</h2>
          <ul>
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
