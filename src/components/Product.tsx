import React, { FC } from "react";
import { ProductResponseData } from "../types";

type Props = {
  product: ProductResponseData;
  selectOption?: (v: string) => void;
  selectedSize?: string;
};

export const Product: FC<Props> = ({
  product,
  selectedSize,
  selectOption = () => null,
}) => {
  return (
    <article className="product">
      <div className="product__image">
        <img
          src={product.data.attributes.main_image.image_sizes.medium}
          alt="product"
        />
      </div>
      <div className="product__info">
        <h3 className="product__brand">
          {product.data.attributes.brand.attributes.name}
        </h3>
        <h4 className="product__title">
          {product.data.attributes.product_classification}
        </h4>
        <p className="product__price">
          {
            product.data.attributes.price.attributes.available_max_regular_price
              .amount
          }
        </p>
        {!!product.data.attributes.child_products && (
          <div className="product__sizes">
            <select
              onChange={(e) => selectOption(e.target.value)}
              id="sizes"
              name="sizes"
            >
              <option value="">Kies je maat</option>
              {product.data.attributes.child_products.map((childProduct) => {
                const value = childProduct.attributes[0].value;
                return (
                  <option value={value} key={value}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        <div className="product__selected-size">Maat: {selectedSize}</div>
      </div>
    </article>
  );
};
