import React, { FC, useState } from "react";
import { CrossSellProductType } from "../types";
import { Button } from "./Button";

type Props = {
  productData: CrossSellProductType;
  selectOption?: (v: string) => void;
  selectedSize?: string;
};

export const CrossSellProduct: FC<Props> = ({ productData }) => {
  const { product } = productData.attributes;
  const rollupAttributes = product.attributes.rollup_attributes;
  const hasChildProduct = !!rollupAttributes;
  const productAttributes = product.attributes.product_attributes;

  // select size,etc
  const [selectedOption, setSelectedOption] = useState("");

  // change button icon when clicked
  const cartIcon = "./icons/cart-white.png";
  const checkIcon = "./icons/check-white.png";
  const [buttonIcon, setButtonIcon] = useState(cartIcon);

  return (
    <div className="cross-sell__product">
      <div className="cross-sell__image">
        <img src={product.attributes.main_image.image_sizes.small} alt="" />
      </div>
      <div className="cross-sell__info">
        <h5 className="cross-sell__name">{product.attributes.name}</h5>
        <p className="cross-sell__price">
          {product.attributes.price.available_max_regular_price.amount}
        </p>
        <div className="cross-sell__buttons">
          {!!rollupAttributes &&
            rollupAttributes.map((rollupKey) => {
              const attributeList = productAttributes[rollupKey];

              return (
                <div className="cross-sell__options" key={rollupKey}>
                  <select
                    onChange={(e) => setSelectedOption(e.target.value)}
                    id="sizes"
                    name="sizes"
                  >
                    <option value="">Kies een optie</option>
                    {attributeList.map((value) => {
                      return (
                        <option value={value} key={value}>
                          {value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              );
            })}

          <Button
            theme="primary"
            className="cross-sell__button"
            disabled={!!rollupAttributes && selectedOption === ""}
            onClick={() => setButtonIcon(checkIcon)}
          >
            <img src={buttonIcon} alt="cart" />
          </Button>
        </div>
      </div>
    </div>
  );
};
