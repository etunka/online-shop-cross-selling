import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {
  parentCrossSellProductData,
  standaloneCrossSellProductData,
} from "../__mocks__/crossSellProduct";
import { CrossSellProduct } from "./CrossSellProduct";

describe("CrossSellProduct component", () => {
  it("parent cross sell product", async () => {
    const { getByTestId } = render(
      <CrossSellProduct productData={parentCrossSellProductData} />
    );

    // button should be initially disabled with a cross-sell product with child products
    const addToCartBtn = getByTestId("cross-sell-add-to-cart-button");
    expect(addToCartBtn).toBeDisabled();

    // button should be enabled after a dropdown option is selected
    fireEvent.change(getByTestId("cross-sell-product-select"), {
      target: { value: "40-46" },
    });
    expect(addToCartBtn).not.toBeDisabled();
  });

  it("standalone cross sell product", async () => {
    const { getByTestId } = render(
      <CrossSellProduct productData={standaloneCrossSellProductData} />
    );

    // button should be initially enabled with a standalone cross-sell product
    const addToCartBtn = getByTestId("cross-sell-add-to-cart-button");
    expect(addToCartBtn).not.toBeDisabled();

    // button should initially have shopping-cart icon
    const addToCartBtnIcon = getByTestId("cross-sell-button-icon");
    expect(addToCartBtnIcon).toHaveAttribute("src", "./icons/cart-white.png");

    // add to cart button icon should have check icon when clicked
    fireEvent.click(addToCartBtn);
    expect(addToCartBtnIcon).toHaveAttribute("src", "./icons/check-white.png");
  });
});
