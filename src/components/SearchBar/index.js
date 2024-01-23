import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function SearchBar() {
  return (
    <Container
      style={{
        backgroundColor: "#FAFBFC",
        padding: "10px 30px",
        boxShadow: "0px 5px 2px 1px rgb(22 21 21 / 22%)",
        borderRadius: "6px",
      }}
    >
      <Row>
        <Col>
          <p>Product Category</p>
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
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

          <Button
            style={{
              backgroundColor: "#542686",
              padding: "15px",
              color: "#FFFFFF",
              borderRadius: "6px",
            }}
            size="lg"
            type="submit"
          >
            Search Products
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
