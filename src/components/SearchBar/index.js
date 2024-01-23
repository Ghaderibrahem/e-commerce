import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./index.css";
function SearchBar() {
  return (
    <Container className="mt-5 px-4 py-4 rounded-2 searchbar-root">
      <Row>
        <Col>
          <p>Product Category</p>
        </Col>
      </Row>
      <Row>
        <Col
          xs={12}
          md={9}
          //   style={{
          //     display: "flex",
          //     justifyContent: "space-between",
          //     alignItems: "center",
          //   }}
        >
          <Form.Select
            aria-label="Default select example"
            style={{
              height: "50px",
              width: "50%",
              backgroundColor: "#FAFBFC",
              borderRadius: "6px",
              paddingInlineStart: "10px",
              border: "1px solid #E9E7E7",
            }}
          >
            <option>all</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">four</option>
            <option value="5">five</option>
            <option value="6">six</option>
          </Form.Select>
        </Col>
        <Col xs={12} md={3} className="d-flex justify-content-end">
          <Button className=" rounded submit-btn" size="lg" type="submit">
            Search Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
