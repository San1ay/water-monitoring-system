import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { UserContext } from "./userContext";
export default function Header() {
  const { user, signOut } = useContext(UserContext);
  return (
    <Navbar variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src="/site-logo.jpg" alt="..." height="36" />
          Water Quality Monitoring
        </Navbar.Brand>
        <Nav.Link
          href="/tests/new-test"
          style={{ color: "green", marginLeft: "20px" }}
        >
          Test Water
        </Nav.Link>
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
            <Nav.Link href="/tests">Tests</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contactus">Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
