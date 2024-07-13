import React from "react";
import { useState } from "react";
import "./Navigationbar.css";
import logo from "../assets/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FiMenu, FiX } from "react-icons/fi";
// import { Link, animateScroll as scroll, Events, scrollSpy } from "react-scroll";
import { Link } from 'react-router-dom'
import Create from "./Create";

const Navigationbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({ smooth: true, duration: 500 });
  };

  return (
    <>
      <div className="header">
        <Navbar
          bg="dark"
          data-bs-theme="dark"
          expand="md"
          fixed="top"
          className="bg-body-tertiary"
        >
          <Container>
            <div className="">
              <Navbar.Brand
                href="#logo"
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  width="40"
                  height="34"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
            </div>
            <div className="navItem">
              <Navbar.Toggle
                aria-controls="basic-navbar-nav"
                onClick={handleToggle}
              >
                {expanded ? <FiX /> : <FiMenu />}
              </Navbar.Toggle>
              <Navbar.Collapse
                id="basic-navbar-nav"
                className={expanded ? "show" : ""}
              >
                <Nav className="me-auto">
                  <Nav.Link
                    className="me-4"
                    href="#home"
                    to="/"
                    smooth={true}
                    duration={500}
                  >
                    HOME
                  </Nav.Link>
                  <Nav.Link
                    className="me-4"
                    href="#printers"
                    to="printers"
                    smooth={true}
                    duration={500}
                  >
                    3D-PRINTERS
                  </Nav.Link>
                  <Nav.Link
                    className="me-4"
                    href="#exibition"
                    to="exibition"
                    smooth={true}
                    duration={500}
                  >
                    EXIBITION
                  </Nav.Link>
                  <Nav.Link className="me-4" href="https://www.utu.ac.in/AMTICS/">
                    ABOUT
                  </Nav.Link>
                  <Nav.Link
                    className="me-4"
                    href="#create"
                    onClick={handleShowModal}
                  >
                    CREATE
                  </Nav.Link>
                  <Nav.Link className="me-4" href="">
                    <Link className="loginLink" to={'/loginPage'}>LOG IN</Link>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
      <Create showModal={showModal} handleClose={handleCloseModal} />
    </>
  );
};

export default Navigationbar;
