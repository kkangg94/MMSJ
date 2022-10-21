import React from "react";
import Rating from "./Rating";
import data from "../data";

export default function Product(props) {
  const { product } = props;
  return (
    <>
      <li>
        <div key={product._id} className="product">
          <img className="product-image" src={product.image} alt="product" />
          <div className="product-name">
            <a href="product.html">{product.name}</a>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">{product.price}</div>
          <Rating rating={product.rating} numReviews={product.numReviews} />
        </div>
      </li>
    </>
  );
}
