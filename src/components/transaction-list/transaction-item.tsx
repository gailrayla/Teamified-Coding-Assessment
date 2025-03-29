import Transaction from "@/types/transaction";

type TransactionItemProps = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const subtitle = [transaction.suburb, transaction.shortCategory]
    .filter(Boolean)
    .join(" | ");

  return (
    <li className="transaction-item">
      <img src={transaction.logoUrl} alt={transaction.transactionTitle} />
      <div className="transaction-details">
        <strong className="transaction-title">
          {transaction.transactionTitle}
        </strong>
        <p className="transaction-subtitle">{subtitle}</p>
      </div>
      <span className="transaction-amount">
        <span
          className={transaction.cashflow === "inflow" ? "inflow" : "outflow"}
        >
          {transaction.cashflow === "inflow" ? "+" : "-"}
        </span>
        ${transaction.amount}
      </span>
    </li>
  );
};
