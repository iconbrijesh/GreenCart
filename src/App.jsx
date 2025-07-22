import Navbar from "./Navbar.jsx";
import './App.css';
import { Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import HomePage from "./landing_page/Home/HomePage";
import AboutPage from "./landing_page/About/AboutPage";
import ProductPage from "./landing_page/Product/ProductPage";
import BecomeSeller from "./landing_page/Seller/BecomeSeller";

import Footer from "./Footer.jsx";

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/product" element={<ProductPage />} />
         <Route path="/signup" element={<SignUp />} />
        <Route path="/seller" element={<BecomeSeller />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App;
