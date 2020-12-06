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

const productDataUrl =
  "http://dump.dataplatform.shoes/20201005_frontend_assignment/prod_details_362950.json";

const crossSellDataUrl =
  "http://dump.dataplatform.shoes/20201005_frontend_assignment/cross_sell_products_for_362950.json";

// React Modal Library
const modalStyle = {
  backgroundColor: "#fff",

  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    inset: "50% auto auto 50%",
  },
  overlay: {
    backgroundColor: "rgb(86, 84, 83, 0.75)",
  },
};

Modal.setAppElement("#root");

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

  if (!product) {
    return <div>Loading...</div>;
  }

  const hasChildProduct = !!product.data.attributes.child_products;

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Nav />
        <Product product={product} selectOption={setSelectedOption} />
        <Button
          theme="primary"
          size="large"
          onClick={() => setIsOpen(true)}
          disabled={hasChildProduct && selectedOption === ""}
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
          <button className="modal__button" onClick={() => setIsOpen(false)}>
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
    </div>
  );
}

export default App;
