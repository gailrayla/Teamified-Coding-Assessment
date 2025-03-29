export type FilterType = "all" | "inflow" | "outflow";

export type ToolbarButtonProps = {
  label: string;
  filter: FilterType;
  selectedFilter: FilterType;
  onClick: (filter: FilterType) => void;
};
