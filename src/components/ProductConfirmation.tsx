import React, { FC } from "react";
import { Button } from "./Button";

export const ProductConfirmation: FC = ({ children }) => {
  return (
    <div
      className="product-confirmation"
      data-testid="product-confirmation-container"
    >
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
        <Button theme="primary" className="product-confirmation__button">
          Ga naar winkelmandje
        </Button>
        <Button theme="secondary" className="product-confirmation__button">
          Verder shoppen
        </Button>
      </div>
    </div>
  );
};
