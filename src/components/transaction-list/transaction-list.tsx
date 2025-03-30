import { useEffect, useState } from "react";
import Transaction from "@/types/transaction";
import { TransactionItem } from "./transaction-item";
import { formatDate } from "@/utils/format";
import { FilterType } from "@/types/filters";
import { groupTransactionsByDate } from "@/utils/transaction-utils";

type TransactionListProps = {
  filter: FilterType;
};

export const TransactionList = ({ filter }: TransactionListProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 10;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        let url = `http://localhost:3004/transactions?_start=${offset}&_limit=${limit}`;

        if (filter !== "all") {
          url += `&cashflow=${filter}`;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Transaction[] = await response.json();

        if (data.length < limit) {
          setHasMore(false);
        }

        const sortedTransactions = data.sort(
          (a: Transaction, b: Transaction) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        // Filter out duplicates
        setTransactions((prevTransactions) => {
          const existingIds = new Set(
            prevTransactions.map((tx) => tx.thriveBankTransactionID)
          );
          const uniqueTransactions = sortedTransactions.filter(
            (tx) => !existingIds.has(tx.thriveBankTransactionID)
          );
          return [...prevTransactions, ...uniqueTransactions];
        });
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, [filter, offset, limit]);

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

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
      {hasMore && (
        <div className="load-more">
          <button onClick={handleLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};
