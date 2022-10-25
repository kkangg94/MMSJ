import Compare from "./components/Compare";
<<<<<<< HEAD
import Map from "./components/Map";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
>>>>>>> 7720f5747a9e0498e627192f8d8612856cbf61d1

function App() {
  return (
    <>
<<<<<<< HEAD
      <Compare />
      {/* <Map></Map> */}
=======
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/" element={<HomeScreen />} exact></Route>
        </Routes>
      </BrowserRouter>
      <Compare />
      <Footer />
>>>>>>> 7720f5747a9e0498e627192f8d8612856cbf61d1
    </>
  );
}

export default App;
