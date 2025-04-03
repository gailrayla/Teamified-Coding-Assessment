import { useEffect, useState } from "react";
import Transaction from "@/types/transaction";
import { TransactionItem } from "./transaction-item";
import { formatDate } from "@/utils/format";
import { FilterType } from "@/types/filters";
import { groupTransactionsByDate } from "@/utils/transaction-utils";
import "./transaction-list.css";

type TransactionListProps = {
  filter: FilterType;
};

export const TransactionList = ({ filter }: TransactionListProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        let url = `http://localhost:3004/transactions`;

        if (filter !== "all") {
          url += `?cashflow=${filter}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Transaction[] = await response.json();

        const sortedTransactions = data.sort(
          (a: Transaction, b: Transaction) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setTransactions(sortedTransactions);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [filter]);

  const groupedTransactions = groupTransactionsByDate(transactions);

  return (
    <div className="c-container-content-width transaction-list">
      {Object.entries(groupedTransactions).map(([date, transactions]) => (
        <div key={date} className="transaction-group">
          <h2 className="transaction-date">{formatDate(date)}</h2>
          <ul className="transaction-items">
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.thriveBankTransactionID}
                transaction={transaction}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
