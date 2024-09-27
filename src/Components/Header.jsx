import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "#d3e0ea",
          borderBottom: "2px solid #a6b1c0",
          padding: "0.75rem 1rem",
        }}
      >
        <Container>
          <Row className="w-100">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Navbar.Brand
                href="#home"
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.5rem",
                  color: "#2c3e50",
                  fontWeight: "bold",
                }}
              >
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "#2c3e50" }}
                >
                  <i
                    className="fa-solid fa-play fa-beat-fade"
                    style={{ color: "#4d96b6", marginRight: "0.5rem" }}
                  ></i>
                  Media Player
                </Link>
              </Navbar.Brand>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
