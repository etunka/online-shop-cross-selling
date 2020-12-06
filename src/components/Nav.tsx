import React, { FC } from "react";

export const Nav: FC = () => {
  return (
    <div className="nav">
      <div className="nav__menu">
        <img
          className="nav__menu-icon"
          src="./icons/hamburger.png"
          alt="menu"
        ></img>
        <p className="nav__text">menu</p>
      </div>
      <form method="POST" className="nav__form">
        <textarea
          className="nav__search"
          placeholder="Ik ben op zoek naar..."
        />
        <img className="nav__search-icon" src="./icons/search.png" alt="" />
      </form>
    </div>
  );
};
