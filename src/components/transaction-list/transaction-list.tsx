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
        const sortedTransactions = data.sort(
          (a: Transaction, b: Transaction) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setTransactions(sortedTransactions);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  const groupedTransactions = transactions.reduce<
    Record<string, Transaction[]>
  >((acc, transaction) => {
    acc[transaction.date] = acc[transaction.date] || [];
    acc[transaction.date].push(transaction);
    return acc;
  }, {});

  return (
    <div className="c-container-content-width transaction-list">
      {Object.entries(groupedTransactions).map(([date, transactions]) => (
        <div key={date} className="transaction-group">
          <h2 className="transaction-date">{formatDate(date)}</h2>
          <ul className="transaction-items">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
