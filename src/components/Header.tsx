import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="header">
      <img src="./logo.png" alt="logo" />
      <div className="header__icons">
        <img className="header__icon" src="./icons/login.png" alt="login" />
        <img className="header__icon" src="./icons/fav.png" alt="fav" />
        <img
          className="header__icon header__icon--cart"
          src="./icons/cart.png"
          alt="cart"
        />
      </div>
    </div>
  );
};
