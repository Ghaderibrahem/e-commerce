import React from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { searchBarRoot } from "./styles";
const silkhausLogo = "./images/silkhaus-logo.png";

function Header() {
  return (
    // <Navbar className="bg-body-tertiary justify-content-between">
    <Container fluid className="bg-white">
      <Row
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   padding: "20px 150px 20px 60px",
      //   marginBottom: "40px",
      //   ...searchBarRoot,
      // }}
      >
        <Col xs={12} md={6} lg={6}>
          <Image
            src={silkhausLogo}
            rounded
            //   style={{ maxHeight: "77px" }}
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Link
            to={{ pathname: "products", search: "?sort=asc&page=1&limit=10" }}
            style={{
              textDecoration: "none",
            }}
          >
            Products
          </Link>
          <Link
            to={{ pathname: "products", search: "?login=true" }}
            style={{
              marginInlineStart: "15px",
              textDecoration: "none",
            }}
          >
            Cart
          </Link>
        </Col>
      </Row>
    </Container>

    // </Navbar>
  );
}

export default Header;
