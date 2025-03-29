import { useState } from "react";
import checkIcon from "@/assets/check-circle-fill.svg";
import receiptIcon from "@/assets/receipt.svg";
import plusIcon from "@/assets/plus.svg";
import minusIcon from "@/assets/minus.svg";

type FilterType = "all" | "inflow" | "outflow";

interface ToolbarProps {
  setFilter: (filter: FilterType) => void;
}

export const Toolbar = ({ setFilter }: ToolbarProps) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  const handleFilterChange = (filter: FilterType) => {
    setSelectedFilter(filter);
    setFilter(filter);
  };

  return (
    <div className="toolbar">
      <button
        className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
        onClick={() => handleFilterChange("all")}
      >
        {selectedFilter === "all" && <img src={checkIcon} alt="Selected" />}
        All
      </button>

      <button
        className={`filter-btn ${selectedFilter === "inflow" ? "active" : ""}`}
        onClick={() => handleFilterChange("inflow")}
      >
        <img src={plusIcon} alt="Income" />
        Income
      </button>

      <button
        className={`filter-btn ${selectedFilter === "outflow" ? "active" : ""}`}
        onClick={() => handleFilterChange("outflow")}
      >
        <img src={minusIcon} alt="Expense" />
        Expense
      </button>
    </div>
  );
};
