import Footer from "../components/Footer";
import Header from "../components/Header";
import { Detail } from "../components/product_detail/detail";

const Product = ({ convertPrice, cart, setCart }) => {
  return (
    <>
      <Detail convertPrice={convertPrice} cart={cart} setCart={setCart} />
      <Footer />
    </>
  );
};

export default Product;
