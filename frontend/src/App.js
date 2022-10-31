import Compare from "./screens/CompareScrenn";
import Map from "./components/Map";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import MainPage from "./screens/MainPage";
import BoardScreen from "./screens/BoardScreen";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import CustomerService from "./screens/CustomerService";
import Item from "./screens/StoreScreen";
import EventScreen from "./screens/EventScreen";

function App() {
  return (
    <>
      {/* <Compare /> */}
      {/* <Map></Map> */}

      <Routes>
        <Route
          path="/api/compare/product/:id"
          element={<ProductScreen />}
        ></Route>
        <Route path="/api/compare" element={<HomeScreen />} exact></Route>
        <Route path="/" element={<MainPage />} exact></Route>
        <Route path="/api/board" element={<BoardScreen />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/api/qna" element={<CustomerService />}></Route>
        <Route path="/api/store" element={<Item />}></Route>
        <Route path="/api/event" element={<EventScreen />}></Route>
      </Routes>

      {/* <Compare /> */}
    </>
  );
}

export default App;
