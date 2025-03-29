import Transaction from "@/types/transaction";

type TransactionItemProps = {
  transaction: Transaction;
};

export const TransactionItem = ({ transaction }: TransactionItemProps) => {
  const subtitle = [transaction.suburb, transaction.shortCategory]
    .filter(Boolean)
    .join(" | ");

  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <img
        src={transaction.logoUrl}
        alt={transaction.transactionTitle}
        width={40}
        height={40}
        style={{ borderRadius: "5%" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "40px",
          lineHeight: "1",
        }}
      >
        <strong style={{ fontSize: "16px", fontWeight: "600" }}>
          {transaction.transactionTitle}
        </strong>
        <p style={{ fontSize: "14px", color: "gray", margin: 0 }}>{subtitle}</p>
      </div>
      <span
        style={{ marginLeft: "auto", fontWeight: "bold", fontSize: "16px" }}
      >
        <span
          style={{ color: transaction.cashflow === "inflow" ? "green" : "red" }}
        >
          {transaction.cashflow === "inflow" ? "+" : "-"}
        </span>
        ${transaction.amount}
      </span>
    </li>
  );
};
