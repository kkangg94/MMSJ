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

function App() {
  return (
    <>
      {/* <Compare /> */}
      {/* <Map></Map> */}

      <Header />
      <Slider />
      <Routes>
        <Route path="/product/:id" element={<ProductScreen />}></Route>
        <Route path="/api/compare" element={<HomeScreen />} exact></Route>
      </Routes>

      {/* <Compare /> */}
      <Footer />
    </>
  );
}

export default App;
