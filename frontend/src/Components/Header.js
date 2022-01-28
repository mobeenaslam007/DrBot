import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={"https://i.postimg.cc/j2JmJ6td/drbot.jpg"}
              alt=""
              width="100px"
              height="auto"
              className="img-responsive"
              style={{ marginRight: 15 }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <Nav.Link href="#about">About</Nav.Link> */}
          </Nav>

          {/* <NavDropdown id="username" title="Login">
            <NavDropdown.Item>Register</NavDropdown.Item>
          </NavDropdown> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
