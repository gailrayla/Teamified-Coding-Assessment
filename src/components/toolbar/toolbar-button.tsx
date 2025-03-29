import { ToolbarButtonProps } from "@/types/filters";
import { getIcon } from "@/utils/icon";
import checkIcon from "@/assets/check-circle-fill.svg";

export const ToolbarButton = ({
  filter,
  selectedFilter,
  onClick,
}: ToolbarButtonProps) => {
  const isSelected = selectedFilter === filter;
  const icon = getIcon(filter, isSelected) || undefined;

  return (
    <button
      onClick={() => onClick(filter)}
      className={`toolbar-button ${isSelected ? "selected" : ""} ${
        filter === "all" && isSelected ? "all-selected" : ""
      }`}
    >
      {filter === "all" && isSelected ? (
        <>
          <img src={checkIcon} alt="Check icon" className="check-icon" />
          <span className="all-text">All</span>
        </>
      ) : filter === "all" ? (
        <span className="all-text">All</span>
      ) : (
        icon && (
          <img src={icon} alt={`${filter} icon`} className="toolbar-icon" />
        )
      )}
    </button>
  );
};
