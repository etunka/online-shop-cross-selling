import React, { FC } from "react";
import { Button } from "./Button";

export const ProductConfirmation: FC = ({ children }) => {
  return (
    <div className="product-confirmation">
      <div className="product-confirmation__title">
        <img
          className="product-confirmation__icon"
          src="./icons/check.png"
          alt=""
        />
        <span>Toegevoegd aan je winkelmandje!</span>
      </div>
      {children}
      <div className="product-confirmation__buttons">
        <Button theme="primary">Ga naar winkelmandje</Button>
        <Button theme="secondary">Verder shoppen</Button>
      </div>
    </div>
  );
};
