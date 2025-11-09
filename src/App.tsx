import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./common/Header";
import HeroSwiper from "./components/Hero/Hero";
import Products from "./components/products/Products";
// import Footer from "./common/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="min-h-screen  bg-slate-50">
        <Routes>
          <Route path="/" element={<HeroSwiper />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
