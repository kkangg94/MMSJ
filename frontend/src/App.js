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

function App() {
  return (
    <>
      {/* <Compare /> */}
      {/* <Map></Map> */}

      <Header />

      <Routes>
        <Route path="/product/:id" element={<ProductScreen />}></Route>
        <Route path="/" element={<HomeScreen />} exact></Route>
      </Routes>

      {/* <Compare /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
