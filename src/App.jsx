import { useState } from "react";

import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import SingleItem from "./pages/singleItem/SingleItem";
import Blog from "./pages/blog/Blog";
import AboutPage from "./pages/about/AboutPage";
import Footer from "./layouts/footer";
import DetailsProduct from "./pages/details-product/DetailsProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/singleItem" element={<SingleItem />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutPage" element={<AboutPage />} />
        <Route path="/product/:id" element={<DetailsProduct />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
