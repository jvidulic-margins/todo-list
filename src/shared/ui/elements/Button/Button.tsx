import { type ForwardedRef, forwardRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "shared/lib";
import { type ButtonVariant, type ButtonSize, type ButtonColor } from "./types";
import { getBaseClasses, getSizeClasses, getVariantClasses } from "./styles";

interface Props {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  to?: string;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;
  isLoading?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

/**
 * @param to - If provided, renders as react-router-dom Link component
 * @param href - If provided, renders as anchor tag
 * @param variant - Default: "contained"
 * @param size - Default: "md"
 * @param color - Default: "primary"
 * @param isLoading - If true, renders loading spinner
 * @param icon - If provided, renders an icon inside the button (for the icon variant)
 */
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  (
    {
      variant = "contained",
      size = "md",
      color = "primary",
      children,
      type = "button",
      to,
      href,
      target = "_blank",
      onClick,
      isLoading,
      disabled,
      icon,
      className,
      ...commonProps
    },
    ref
  ) => {
    const classes = cn(
      getBaseClasses(),
      getSizeClasses(size),
      getVariantClasses(variant, color),
      className
    );

    if (to)
      return (
        <Link
          to={to}
          className={classes}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...commonProps}
        >
          {children}
        </Link>
      );

    if (href)
      return (
        <a
          href={href}
          target={target}
          className={classes}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
          {...commonProps}
        >
          {children}
        </a>
      );

    return (
      <button
        /* eslint-disable-next-line react/button-has-type */
        type={type}
        onClick={onClick}
        className={classes}
        ref={ref as ForwardedRef<HTMLButtonElement>}
        disabled={disabled || isLoading}
        {...commonProps}
      >
        {isLoading ? "Loading..." : (icon ?? children)}
      </button>
    );
  }
);
