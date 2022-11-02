import React, { useEffect, useState } from "react";
// import data from "../data";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomeScreen() {
  const [okay, setOkay] = useState(false);
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:5000/api/product/getAll");
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setProducts(data);
        setOkay(true);
      } else {
        alert("통신 이상");
        setOkay(false);
      }
    }
    fetchData();
  }, []);

  if (okay) {
    return (
      <>
        <Header />
        {/* <div className="content"> */}
        <ul className="products">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </ul>
        <p>dodo</p>
        {/* </div> */}
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div>통신이 이상합니다.</div>
        <Footer />
      </>
    );
  }
}
