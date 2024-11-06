import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./pages/PageNotFound";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import Wishlist from "./pages/Wishlist";
import OrderSuccess from "./pages/OrderSuccess";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        containerStyle={{
          inset: "32px",
        }}
        toastOptions={{
          style: {
            borderRadius: "25px",
            padding: "7px 15px",
            maxWidth: "700px",
            fontWeight: 500,
          },
        }}
      />
    </>
  );
};

export default App;
