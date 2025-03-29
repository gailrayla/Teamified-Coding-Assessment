import { ToolbarButtonProps } from "@/types/filters";
import { getIcon } from "@/utils/icon";

export const ToolbarButton = ({
  filter,
  selectedFilter,
  onClick,
}: ToolbarButtonProps) => {
  const isSelected = selectedFilter === filter;
  const icon = getIcon(filter, isSelected);

  return (
    <button
      onClick={() => onClick(filter)}
      className={`toolbar-button ${isSelected ? "selected" : ""}`}
    >
      {icon && (
        <img src={icon} alt={`${filter} icon`} className="toolbar-icon" />
      )}
    </button>
  );
};
