import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5", padding: "50px 0" }}>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Welcome to News Profile App!</h1>
            <p>
              News Profile App is a powerful tool that allows you to manage your
              user information, published articles, bookmarks, and settings in
              one convenient place. With its intuitive interface and advanced
              features, using News Profile App has never been easier.
            </p>
            <p>
              To get started, simply click on the links in the navigation bar at
              the top of the page. From there, you can navigate to any section
              of the app and start managing your content.
            </p>
            <p>
              Thank you for choosing News Profile App. If you have any questions
              or feedback, please don't hesitate to contact us.
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row
          className="bg-dark text-white py-2 fixed-bottom"
          style={{ bottom: 0, left: 0, right: 0 }}
        >
          <Col md={6} className="d-flex align-items-center mt-3 ml-1">
            <p>Contact Us: +1 555-555-5555</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end align-items-center">
            <a
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="m-3"
            >
              <FaYoutube />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
