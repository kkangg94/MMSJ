import data from "../data";
import Product from "./Product";

function Compare() {
  return (
    <>
      <header className="header">
        <div className="brand">
          <button onclick="openMenu()">&#9776;</button>
          <a href="index.html">뭐마시지?</a>
        </div>
        <div className="header-left-links">
          <a href="cart.html">메뉴</a>
          <a href="signin.html">소식</a>
          <a href="board.html">자유게시판</a>
          <a href="help.html">고객센터</a>
        </div>
        <div className="header-right-links">
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
      <footer className="footer">
        <p>
          사업자등록번호 : 201-81-21515 주식회사 에스씨케이컴퍼니 대표이사 : 송
          데이비드 호섭 TEL : 1522-3232 개인정보 책임자 : 이현수
        </p>
        <p>All right reserved.</p>
      </footer>
    </>
  );
}

export default Compare;
