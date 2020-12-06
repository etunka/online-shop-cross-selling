import React, { FC } from "react";
import classNames from "classnames";

type Props = {
  theme?: "primary" | "secondary" | "small-primary";
  size?: "small" | "large";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export const Button: FC<Props> = ({
  theme,
  size,
  onClick,
  disabled = false,
  children,
  className = "",
}) => {
  const buttonClass = classNames("button", className, {
    "button--primary": theme === "primary",
    "button--secondary": theme === "secondary",
    "button--large": size === "large",
    "button--disabled": disabled,
  });
  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};
