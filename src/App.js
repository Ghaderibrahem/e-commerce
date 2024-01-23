import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Container fluid className="h-100 p-0">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="products" />} />
        <Route path={`/products`} search element={<Products />} />
      </Routes>
    </Container>
  );
}

export default App;
