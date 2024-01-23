import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";
const silkhausLogo = "./images/silkhaus-logo.png";

function Header() {
  return (
    <Container className="bg-white header-root" fluid>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <Image src={silkhausLogo} rounded className="ms-5" />
        </Col>
        <Col xs={12} md={4} lg={4}>
          <Link
            to={{ pathname: "products", search: "?sort=asc&page=1&limit=10" }}
            className="text-decoration-none"
          >
            Products
          </Link>
          <Link className="text-decoration-none ms-3" to={{ pathname: "cart" }}>
            Cart
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
