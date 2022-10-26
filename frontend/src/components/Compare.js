import data from "../data";
import Product from "../components/Product";

import ProductScreen from "../screens/ProductScreen";
import HomeScreen from "../screens/HomeScreen";
import Header from "./Header";
import Footer from "./Footer";

function Compare() {
  return (
    <>
      <Header />
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button">x</button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>

          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          {/* <ul className="products">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </ul> */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Compare;
