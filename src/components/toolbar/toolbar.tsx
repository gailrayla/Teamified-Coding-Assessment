import { FilterType } from "@/types/filters";
import { useState } from "react";
import { ToolbarButton } from "./toolbar-button";

export const Toolbar = ({
  onFilterChange,
}: {
  onFilterChange: (filter: FilterType) => void;
}) => {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("all");

  const handleFilterClick = (filter: FilterType) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="toolbar">
      <ToolbarButton
        label="All"
        filter="all"
        selectedFilter={selectedFilter}
        onClick={handleFilterClick}
      />
      <ToolbarButton
        label="Income"
        filter="inflow"
        selectedFilter={selectedFilter}
        onClick={handleFilterClick}
      />
      <ToolbarButton
        label="Expense"
        filter="outflow"
        selectedFilter={selectedFilter}
        onClick={handleFilterClick}
      />
    </div>
  );
};
