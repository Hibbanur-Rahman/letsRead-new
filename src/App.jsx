import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./Components/Footer";
import Programs from "./pages/Programs";
import PhoenicKit from "./pages/PhoenicKit";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import Contact from "./pages/contact";

import ProductView from "./pages/productView";
import OrderDetail from "./pages/orderDetail";
import "./assets/styles/main.scss";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="app w-full overflow-hidden flex flex-col justify-center m-0 p-0 relative">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/phoenicKit" element={<PhoenicKit />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/productView" element={<ProductView />} />
        <Route path="/order" element={<OrderDetail />} />
      </Routes>
      <Footer />
      <Toaster  containerStyle={{zIndex: 99999}}/>
    </div>
  );
};

export default App;
