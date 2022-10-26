import React from "react";
import data from "../data";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeScreen() {
  return (
    <>
      <Header />
      {/* <div className="content"> */}
      <ul className="products">
        {data.products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </ul>
      <p>dodo</p>
      {/* </div> */}
      <Footer />
    </>
  );
}
