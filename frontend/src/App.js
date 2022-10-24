import Compare from "./components/Compare";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
      </BrowserRouter>
      <Compare />
      <Footer />
    </>
  );
}

export default App;
