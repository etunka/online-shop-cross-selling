import React, { useEffect, useState } from "react";
import "./styles/main.scss";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Product } from "./components/Product";
import { ProductResponseData, CrossSellResponseData } from "./types";
import { Button } from "./components/Button";
import Modal from "react-modal";
import { ProductConfirmation } from "./components/ProductConfirmation";
import { CrossSell } from "./components/CrossSell";
import { fetchData } from "./helper";
import { crossSellDataUrl, modalStyle, productDataUrl } from "./constants";

function App() {
  // main product data
  const [product, setProduct] = useState<ProductResponseData | undefined>(
    undefined
  );

  // cross-sell data
  const [crossSellProducts, setCrossSellProducts] = useState<
    CrossSellResponseData | undefined
  >(undefined);

  // confirmation modal
  const [modalIsOpen, setIsOpen] = useState(false);

  // select shoe size
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    fetchData(productDataUrl).then((data) => setProduct(data));
    fetchData(crossSellDataUrl).then((data) => setCrossSellProducts(data));
  }, []);

  const hasChildProduct = !!product?.data.attributes.child_products;

  return (
    <div className="App" data-testid="app">
      <div className="container">
        <Header />
        <Nav />
        {!!product && (
          <div data-testid="product-container">
            <Product product={product} selectOption={setSelectedOption} />
            <Button
              theme="primary"
              className="button--main"
              size="large"
              onClick={() => setIsOpen(true)}
              disabled={hasChildProduct && selectedOption === ""}
              testId="main-add-to-cart-button"
            >
              In winkelmandje <img src="./icons/cart-white.png" alt="cart" />
            </Button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}
              style={modalStyle}
              contentLabel="Example Modal"
              portalClassName="modal"
            >
              <button
                className="modal__button"
                onClick={() => setIsOpen(false)}
              >
                <img src="./icons/close.png" alt="close" />
              </button>
              <ProductConfirmation>
                <Product product={product} selectedSize={selectedOption} />
              </ProductConfirmation>
              {!!crossSellProducts && (
                <CrossSell products={crossSellProducts.data.hits} />
              )}
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
