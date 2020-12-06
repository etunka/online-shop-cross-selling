import React, { FC } from "react";
import { CrossSellProductType } from "../types";
import { CrossSellProduct } from "./CrossSellProduct";

type Props = {
  products: CrossSellProductType[];
};

export const CrossSell: FC<Props> = ({ products }) => {
  return (
    <div className="cross-sell">
      <h4 className="cross-sell__title">Maak je outfit compleet met...</h4>
      {products.map((productData, key) => {
        return <CrossSellProduct productData={productData} key={key} />;
      })}
    </div>
  );
};
