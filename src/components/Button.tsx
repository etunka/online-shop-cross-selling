import React, { FC } from "react";
import classNames from "classnames";

type Props = {
  theme?: "primary" | "secondary" | "small-primary";
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: FC<Props> = ({
  theme,
  onClick,
  disabled = false,
  children,
}) => {
  const buttonClass = classNames("button", {
    "button--primary": theme === "primary",
    "button--secondary": theme === "secondary",
    "button--small-primary": theme === "small-primary",
    "button--disabled": disabled,
  });
  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};
