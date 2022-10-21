import data from "../data";
import Product from "./Product";

function Compare() {
  return (
    <>
      <header className="header">
        <div className="brand">
          <button onclick="openMenu()">&#9776;</button>
          <a href="index.html">amazona</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-close-button" onclick="closeMenu()">
          x
        </button>
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
          <ul className="products">
            {data.products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </ul>
        </div>
      </main>
      <footer className="footer">All right reserved.</footer>
    </>
  );
}

export default Compare;
