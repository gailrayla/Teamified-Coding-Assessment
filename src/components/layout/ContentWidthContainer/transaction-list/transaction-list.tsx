import { useEffect, useState } from "react";
import Transaction from "@/types/transaction";
import { TransactionItem } from "./transaction-item";

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:3004/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div>
      <h2 style={{ fontSize: "16px", fontWeight: "normal" }}>Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
