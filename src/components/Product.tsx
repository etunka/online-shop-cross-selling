import React, { FC } from "react";

type Props = {
  imageUrl: string;
  brand?: string;
  title: string;
  price: number;
  sizeList?: number[];
};

export const Product: FC<Props> = ({
  imageUrl,
  brand,
  title,
  price,
  sizeList,
}) => {
  return (
    <article className="product">
      <img src={imageUrl} alt="product" className="product__image" />
      <div>
        {!!brand && <h3 className="product__brand">{brand}</h3>}
        <h4 className="product__title">{title}</h4>
        <p className="product__price">{price}</p>
        {!!sizeList && (
          <div className="product__sizes">
            <label htmlFor="sizes">Kies je maat</label>
            <select name="sizes">
              <option value=""></option>
              {sizeList.map((size) => (
                <option value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    </article>
  );
};
