import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Landing.css"; 

function LandingPage() {
  const navigateByUrl = useNavigate();
  return (
    <div>
      <Row className="mt-5 mb-5 align-items-center text-center">
        <Col></Col>
        <Col lg={5} md={5} xs={12}>
          <h1>
            Welcome to <span style={{ color: "#4d96b6" }}>Media Player</span>
          </h1>

          <p style={{textAlign:"justify"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            voluptatum aspernatur ullam hic cum quasi rerum ex doloribus ad
            quaerat eligendi fugiat excepturi itaque voluptas alias totam, quod
            delectus accusantium.
          </p>
          <button
            onClick={() => navigateByUrl("/home")}
            style={{
              backgroundColor: "#4d96b6",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2c3e50")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4d96b6")}
          >
            Get Started
          </button>
        </Col>
        <Col
          lg={5}
          md={5}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="https://media0.giphy.com/media/SYe6yLqC1RWec/giphy-downsized.gif"
            alt=""
            className="img-fluid"
          />
        </Col>
        <Col></Col>
      </Row>

      <div
        className="container-fluid "
        fluid
        style={{ backgroundColor: "#e6eff2", padding: "50px 0" }}
      >
        <h3 className="text-center mt-5 mb-5">Features</h3>
        <div className="cards">
          <Row>
            <Col lg={4} md={6} sm={12}>
              <Card
                className="feature-card mb-3"
                style={{ border: "2px solid #a6b1c0" }}
              >
                <Card.Img
                  variant="top"
                  src="https://media.giphy.com/media/jYGWqorFl75tK/giphy.gif"
                  alt="Feature 1"
                />
                <Card.Body>
                  <Card.Title style={{ color: "#4d96b6" }}>
                    Managing Videos
                  </Card.Title>
                  <Card.Text style={{ color: "#2c3e50" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card
                className="feature-card mb-3"
                style={{ border: "2px solid #a6b1c0" }}
              >
                <Card.Img
                  variant="top"
                  src="https://media.giphy.com/media/jYGWqorFl75tK/giphy.gif"
                  alt="Feature 2"
                />
                <Card.Body>
                  <Card.Title style={{ color: "#4d96b6" }}>
                    Categorized
                  </Card.Title>
                  <Card.Text style={{ color: "#2c3e50" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <Card
                className="feature-card mb-3"
                style={{ border: "2px solid #a6b1c0" }}
              >
                <Card.Img
                  variant="top"
                  src="https://media.giphy.com/media/jYGWqorFl75tK/giphy.gif"
                  alt="Feature 3"
                />
                <Card.Body>
                  <Card.Title style={{ color: "#4d96b6" }}>
                    Watch History
                  </Card.Title>
                  <Card.Text style={{ color: "#2c3e50" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quis.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <div
        className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between w-100"
        style={{
          backgroundColor: "#daeaf6",
          padding: "50px 0",
          color: "#2c3e50",
        }}
      >
        <div className="col-lg-5 col-md-8 col-sm-12 mb-4">
          <h4 style={{ color: "#2c3e50" }}>Simple, Powerful & Fast</h4>
          <h6 className="mb-5 mt-3">
            <span style={{ color: "#4d96b6" }}>Play Everything</span> Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa
            voluptates error eos ducimus.
          </h6>
          <h6 className="mb-5 mt-3">
            <span style={{ color: "#4d96b6" }}>Categorize Videos</span> Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Expedita culpa
            voluptates error eos ducimus.
          </h6>
          <h6 className="mb-5 mt-3">
            <span Title style={{ color: "#4d96b6" }}>
              Managing Videos
            </span>{" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
            culpa voluptates error eos ducimus.
          </h6>
        </div>

        <div className="Video col-lg-5 col-md-4 col-sm-12">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/tOM-nWPcR4U?si=MZErJSMkZZWC0Ii0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
