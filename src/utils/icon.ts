import checkIcon from "@/assets/check-circle-fill.svg";
import plusIcon from "@/assets/plus.svg";
import minusIcon from "@/assets/minus.svg";
import { FilterType } from "@/types/filters";

export const getIcon = (filter: FilterType, isSelected: boolean) => {
  if (filter === "all" && isSelected) return checkIcon;
  if (filter === "inflow") return plusIcon;
  if (filter === "outflow") return minusIcon;
  return null;
};
