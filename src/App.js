import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container-fluid h-100 p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="products" />} />
        <Route path={`/products`} search element={<Products />} />
        <Route path={`/cart`} search element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
