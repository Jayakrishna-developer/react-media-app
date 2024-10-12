import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

function LandingPage() {
  const navigateByUrl = useNavigate();

  return (
    <div className="container-fluid">
      <Row className="mt-5 mb-5 align-items-center text-center">
        <Col></Col>
        <Col lg={5} md={5} xs={12}>
          <h1>
            Welcome to <span style={{ color: "#4d96b6" }}>Media Player</span>
          </h1>
          <p style={{ textAlign: "justify" }}>
            Explore a new way to manage, play, and organize your media content
            with ease. Our media player offers seamless functionality,
            cross-platform accessibility, and powerful performance, ensuring the
            best experience for your entertainment needs.
          </p>
          <button
            onClick={() => navigateByUrl("/home")}
            style={{
              backgroundColor: "#4d96b6",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              marginBottom: "20px",
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
            alt="Media player"
            className="img-fluid"
          />
        </Col>
        <Col></Col>
      </Row>

      <div
        className="container-fluid"
        style={{ backgroundColor: "#f0f4f7", padding: "50px 0" }}
      >
        <h3 className="text-center mt-5 mb-5" style={{ color: "#2c3e50" }}>
          Features
        </h3>

        <Row>
          <Col lg={4} md={6} sm={12}>
            <Card
              className="feature-card mb-4"
              style={{
                border: "2px solid #a6b1c0",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/users/740188/screenshots/11467544/media/c767c489d2ee39590d36a5234c5eaedc.gif"
                alt="Managing Videos"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#4d96b6", fontWeight: "bold" }}>
                  MANAGING VIDEOS
                </Card.Title>
                <Card.Text style={{ color: "#2c3e50", textAlign: "justify" }}>
                  Organize your media library effortlessly with categorized
                  playlists and seamless search functionality. Create, delete,
                  and edit your playlists with a simple, intuitive interface.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card
              className="feature-card mb-4"
              style={{
                border: "2px solid #a6b1c0",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/users/1241808/screenshots/2845056/lc03.gif"
                alt="Categorized Content"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#4d96b6", fontWeight: "bold" }}>
                  CATEGORIZED
                </Card.Title>
                <Card.Text style={{ color: "#2c3e50", textAlign: "justify" }}>
                  Organize your videos into categories for easier navigation and
                  access. Easily manage your playlists with a few clicks. making it even simpler to find content you love.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4} md={6} sm={12}>
            <Card
              className="feature-card mb-4"
              style={{
                border: "2px solid #a6b1c0",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src="https://cdn.dribbble.com/users/422171/screenshots/5353624/video_player.gif"
                alt="Watch History"
                style={{ borderRadius: "10px 10px 0 0" }}
              />
              <Card.Body>
                <Card.Title style={{ color: "#4d96b6", fontWeight: "bold" }}>
                  WATCH HISTORY
                </Card.Title>
                <Card.Text style={{ color: "#2c3e50", textAlign: "justify" }}>
                  Sync your watch history across devices and never lose track of
                  what you've watched. Enjoy seamless transitions between
                  devices while maintaining your video progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div
        className="container-fluid d-flex flex-column flex-lg-row align-items-center justify-content-between w-100"
        style={{
          backgroundColor: "#daeaf6",
          padding: "50px 0",
          color: "#2c3e50",
          margin: "0",
        }}
      >
        <div className="col-lg-5 col-md-8 col-sm-12 mb-4">
          <h4 style={{ color: "#2c3e50" }}>Simple, Powerful & Fast</h4>
          <h6 className="mb-5 mt-3" style={{ textAlign: "justify" }}>
            <span style={{ color: "#4d96b6" }}>Play Everything</span> – Our
            media player supports an extensive range of video formats including
            MP4, AVI, MKV, and more, ensuring that you can enjoy any video
            content without worrying about compatibility issues. With a
            user-friendly interface, playing your favorite videos is just a
            click away.
          </h6>
          <h6 className="mb-5 mt-3" style={{ textAlign: "justify" }}>
            <span style={{ color: "#4d96b6" }}>Effortless Organization</span> –
            Categorizing your video library has never been easier. Our intuitive
            categorization tools allow you to sort your videos into playlists,
            genres, or custom folders. Whether you want to organize by
            favorites, most watched, or recently added, it's all streamlined for
            your convenience.
          </h6>
          <h6 className="mb-5 mt-3" style={{ textAlign: "justify" }}>
            <span style={{ color: "#4d96b6" }}>Lightning-Fast Performance</span>{" "}
            – Experience smooth playback and fast loading times. With advanced
            optimization techniques, our media player ensures your videos start
            playing instantly, even in high-definition formats. No more waiting
            for buffering, just instant enjoyment of your content.
          </h6>
          <h6 className="mb-5 mt-3" style={{ textAlign: "justify" }}>
            <span style={{ color: "#4d96b6" }}>
              Cross-Platform Accessibility
            </span>{" "}
            – Use the media player on any device, whether you're on your laptop,
            tablet, or smartphone. Sync your video library across platforms, so
            you can pick up where you left off, no matter which device you're
            using.
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
