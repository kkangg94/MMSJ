import Compare from "./screens/CompareScrenn";
import Map from "./components/Map";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import EventScreen from "./screens/EventScreen";
import AddEventScreen from "./screens/AddEventScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import MainPage from "./screens/MainPage";
import BoardScreen from "./screens/BoardScreen";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import Notfound from "./components/Notfound";
import BoardForm from "./components/BoardForm";
import CustomerService from "./screens/CustomerService";
import Item from "./screens/StoreScreen";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      {/* <Compare /> */}
      {/* <Map></Map> */}
      {/* <Notfound></Notfound> */}

      <Routes>
        <Route
          path="/api/compare/product/:id"
          element={<ProductScreen />}
        ></Route>
        <Route path="/" element={<MainPage />} exact></Route>
        <Route path="/api/compare" element={<HomeScreen />} exact></Route>
        <Route path="/api/event" element={<EventScreen />}></Route>
        <Route path="/api/event/add" element={<AddEventScreen />}></Route>
        <Route path="/api/board" element={<BoardScreen />}></Route>
        <Route path="/api/board/create" element={<BoardForm />}></Route>
        <Route
          path="/login"
          element={user ? <Navigate to="/"></Navigate> : <Login />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
<<<<<<< HEAD
=======
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/api/qna" element={<CustomerService />}></Route>
        <Route path="/api/store" element={<Item />}></Route>
        <Route path="/api/event" element={<EventScreen />}></Route>
      </Routes>
>>>>>>> c2320aa24482ce48b3ff9623ff7993d57d7c7b82

        <Route path="/api/qna" element={<CustomerService />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
      {/* <Compare /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
