import Compare from "./components/Compare";
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

function App() {
  return (
    <>
      {/* <Compare /> */}
      {/* <Map></Map> */}

      <Routes>
        <Route path="/product/:id" element={<ProductScreen />}></Route>
        <Route path="/api/compare" element={<HomeScreen />} exact></Route>
        <Route path="/" element={<MainPage />} exact></Route>
        <Route path="/api/board" element={<BoardScreen />}></Route>
      </Routes>

      {/* <Compare /> */}
    </>
  );
}

export default App;
