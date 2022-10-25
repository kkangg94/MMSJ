import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="brand">
          <button>&#9776;</button>
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
    </div>
  );
}
