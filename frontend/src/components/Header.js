import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BoardScreen from "../screens/BoardScreen";
import Compare from "./Compare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-regular-svg-icons";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
export default function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  return (
    <div>
      <header className="header">
        <div className="brand">
          <button>&#9776;</button>
          <Link to="/">뭐마시지?</Link>
        </div>
        <div className="header-left-links">
          {/* html에서 a 태그가 react에선 link라 생각하면된다 */}
          <Link to="/api/compare">메뉴</Link>
          <Link to="/api/event">소식</Link>
          <Link to="/api/board">
            커뮤니티<span class="SubSpan">New</span>
          </Link>
          <Link to="/api/store">스토어</Link>
          <Link to="/api/qna">고객센터</Link>

          <Routes>
            {/* 원이가 짠것 */}
            {/* <a href="cart.html">메뉴</a>
              <a href="signin.html">소식</a>
              <a href="board.html">자유게시판</a>
              <a href="help.html">고객센터</a> */}
            {/* 라우팅한것 */}
            {/* <Route path="/" element={<MainScreen/>} */}
            {/* <Route path="/api/compare" element={<CompareScreen />} /> */}
            {/* <Route path="/api/event" element={<EventScreen />} /> */}
            <Route path="/api/board" element={<BoardScreen />} />
            {/* <Route path="/api/store" element={<StoreScreen />} /> */}
            {/* <Route path="/api/qna" element={<QnaScreen />} /> */}
          </Routes>
        </div>
        <div className="header-right-links">
          {/* login일때 나타나는 것입니다 */}
          {user && (
            <div>
              <span>{user.nickname}</span>
              <button onClick={handleClick}>Log out</button>
              <FontAwesomeIcon icon={faBell} size="2x" />
              <a href="cart.html">Cart</a>
            </div>
          )}

          {/* <Link to='/cart'>Cart</Link> */}
          {/* login이 아닐때 나타납니다 */}
          {!user && (
            <div>
              <Link to="/login">Signin</Link>

              <FontAwesomeIcon icon={faUser} size="2x" />
            </div>
          )}
          {/* <a href="signin.html">Sign In</a> */}
        </div>
      </header>
    </div>
  );
}
