import { type ButtonVariant, type ButtonSize, ButtonColor } from "./types";

// Variant styles
/** Styles for contained variant */
const getContainedClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "text-white bg-rose-400 hover:bg-rose-300 active:bg-rose-600 disabled:opacity-50";

  // Default color: primary
  return "text-white bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 disabled:opacity-50";
};

/** Styles for outlined variant */
const getOutlinedClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "border-2 border-rose-400 hover:border-rose-300 active:border-rose-600 text-rose-400 hover:text-rose-400 active:text-rose-600 disabled:border-gray-500 disabled:text-gray-500";

  // Default color: primary
  return "border-2 border-indigo-400 hover:border-indigo-300 active:border-blue-600 text-indigo-400 hover:text-indigo-300 active:text-blue-600 disabled:border-gray-500 disabled:text-gray-500";
};

const getIconClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "p-2 bg-rose-400 text-white hover:bg-rose-300 active:bg-rose-600 disabled:opacity-50";

  // Default color: primary
  return "p-2 text-white bg-indigo-400 hover:bg-indigo-300 active:bg-indigo-500 disabled:opacity-50";
};

/** Styles for text variant */
const getTextClasses = (color: ButtonColor): string => {
  if (color === "error")
    return "text-rose-400 hover:text-rose-400 active:text-rose-600 disabled:text-gray-500";

  // Default color: primary
  return "text-indigo-400 hover:text-indigo-300 active:text-blue-600 disabled:text-gray-500";
};

/** Styles for link variant */
const getLinkClasses = (): string => {
  return "p-0 font-normal text-sm hover:underline";
};

// Main style getters
/** Base styles for the button */
export const getBaseClasses = (): string => "rounded transition font-semibold";

/** Size styles controller */
export const getSizeClasses = (size: ButtonSize): string => {
  if (size === "sm") return "py-1 px-3 text-sm";

  if (size === "lg") return "py-3 px-7 text-lg";

  // Default: md
  return "py-2 px-5";
};

/** Variant styles controller */
export const getVariantClasses = (
  variant: ButtonVariant,
  color: ButtonColor
): string => {
  if (variant === "outlined") return getOutlinedClasses(color);

  if (variant === "text") return getTextClasses(color);

  if (variant === "link") return getLinkClasses();

  if (variant === "icon") return getIconClasses(color);

  return getContainedClasses(color); // Default variant: primary
};
