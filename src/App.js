import logo from "./logo.svg";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./pages/Cart";
function App() {
  return (
    <Container
      fluid
      style={{
        height: "100%",
      }}
    >
      {/* <Row>
        <Col> */}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="products" />} />
        <Route path={`/products`} search element={<Products />} />
        <Route path={`/cart`} search element={<Cart />} />
      </Routes>
      {/* </Col>
      </Row> */}
    </Container>
  );
}

export default App;
