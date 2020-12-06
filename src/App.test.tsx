import "isomorphic-fetch";
import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import fetchMock from "fetch-mock";
import App, { productDataUrl, crossSellDataUrl } from "./App";
import { productData } from "./__mocks__/productData";
import { crossSellData } from "./__mocks__/crossSellData";
import Modal from "react-modal";

fetchMock.get(productDataUrl, productData);
fetchMock.get(crossSellDataUrl, crossSellData);
Modal.setAppElement("*");

test("flow with a product with child products", async () => {
  const { getByTestId, queryByTestId, container } = render(<App />);

  expect(queryByTestId("app")).toBeInTheDocument();
  expect(queryByTestId("product-container")).not.toBeInTheDocument();
  // we're waiting for fetch requests on component mount
  await waitFor(() => getByTestId("product-container"));

  // button should be initially disabled with a product with child products
  const addToCartBtn = getByTestId("main-add-to-cart-button");
  expect(addToCartBtn).toBeDisabled();

  // button should be enabled after a dropdown option is selected
  fireEvent.change(getByTestId("main-product-select"), {
    target: { value: "40" },
  });
  expect(addToCartBtn).not.toBeDisabled();

  // confirmation modal should open when button is clicked
  fireEvent.click(addToCartBtn);
  expect(getByTestId("product-confirmation-container")).toBeInTheDocument();
});
