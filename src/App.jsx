import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Shoes from "./components/Shoes/Shoes";
import Pants from "./components/Pants/Pants";
import Shirts from "./components/Shirts/Shirts";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from './components/Cart/Cart';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [cart, setCart] = useState([]);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      <Router>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero handleOrderPopup={handleOrderPopup} />
                  <Products />
                  <Banner />
                  <Subscribe />
                  <Testimonials />
                </>
              }
            />
            <Route path="/products" element={<Products />} />
            <Route path="/top-rated" element={<TopProducts />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
