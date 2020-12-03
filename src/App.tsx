import React from "react";
import "./styles/main.scss";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Product } from "./components/Product";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Nav />
        <Product
          imageUrl="./images/shoe-brown.png"
          brand="Van Lier"
          title="Lage nette schoenen"
          price={159.99}
          sizeList={[40, 41, 42, 43, 44]}
        />
      </div>
    </div>
  );
}

export default App;
