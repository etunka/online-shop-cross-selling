import React, { FC, useEffect, useState } from "react";
import { fetchData } from "../helper";
import { CrossSellProductType, ProductResponseData } from "../types";
import { Button } from "./Button";

const completeProductDataUrl = (
  productId: any
) => `http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_${productId}.jso
n`;

type Props = {
  productData: CrossSellProductType;
  selectOption?: (v: string) => void;
  selectedSize?: string;
};

export const CrossSellProduct: FC<Props> = ({ productData }) => {
  const { product } = productData.attributes;
  const hasChildProduct = !!product.attributes.rollup_attribute_set;

  const [completeProduct, setProduct] = useState<
    ProductResponseData | undefined
  >(undefined);

  useEffect(() => {
    fetchData(
      completeProductDataUrl(product.attributes.product_id)
    ).then((data) => setProduct(data));
  }, []);

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
          {/* {!!product.data.attributes.child_products && (
        <div className="product__sizes">
          <select
            onChange={(e) => selectOption(e.target.value)}
            id="sizes"
            name="sizes"
          >
            <option value="">Kies je maat</option>
            {product.data.attributes.child_products.map((childProduct) => {
              const value = childProduct.attributes[0].value;
              return <option value={value}>{value}</option>;
            })}
          </select>
        </div>
      )} */}

          <Button theme="small-primary" disabled={hasChildProduct}>
            In winkelmandje <img src="./icons/cart-white.png" alt="cart" />
          </Button>
        </div>
      </div>
    </div>
  );
};
