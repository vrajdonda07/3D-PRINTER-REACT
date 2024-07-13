import React from "react";
// import Card from "react-bootstrap/Card";
import { Navbar } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* <Card className="footer" fixed="bottom">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card> */}
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        fixed="bottom"
        className="footer text-center"
        style={{height: '50px'}}
      >
        <Navbar.Brand href="#home" className="mx-auto footer">
          <p className="footer">Fixed Footer</p>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default Footer;
