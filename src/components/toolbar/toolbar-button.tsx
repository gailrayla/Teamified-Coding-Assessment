import { ToolbarButtonProps } from "@/types/filters";
import { getIcon } from "@/utils/icon";
import checkIcon from "@/assets/check-circle-fill.svg";
import "./toolbar.css";

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
        filter === "all" ? "all-button" : ""
      }`}
    >
      {filter === "all" ? (
        <>
          <img
            src={checkIcon}
            alt="Check icon"
            className="check-icon"
            style={{ visibility: isSelected ? "visible" : "hidden" }}
          />
          <span className="all-text">All</span>
        </>
      ) : (
        icon && (
          <img src={icon} alt={`${filter} icon`} className="toolbar-icon" />
        )
      )}
    </button>
  );
};
