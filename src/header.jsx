import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UserContext } from "./userContext";
export default function Header() {
  const { user, signOut } = useContext(UserContext);
  return (
    <Navbar bg="gree" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="site-logo.jpg" alt="..." height="36" />
          Water Quality Monitoring
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          style={{
            textAlign: "right",
          }}
        >
          <Nav style={{ marginLeft: "auto", marginRight: "10px" }}>
            {user && (
              <Nav.Link onClick={signOut} href="/">
                Signout
              </Nav.Link>
            )}
            {!user && <Nav.Link href="/login">Login</Nav.Link>}
            {!user && <Nav.Link href="/register">Signup</Nav.Link>}
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
