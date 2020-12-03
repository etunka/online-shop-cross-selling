import React, { FC } from "react";

type Props = {
  theme?: string;
};

export const Product: FC<Props> = ({ theme, children }) => {
  return <button>{children}</button>;
};
