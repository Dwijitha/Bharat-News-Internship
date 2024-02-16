import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa";

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="black" variant="dark" expand="lg">
        <Navbar.Brand className="m-1" as={Link} to="/">
          News Profile App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="text-white">
            <NavItem>
              <NavLink as={Link} to="/home" className="text-white">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/user-info" className="text-white">
                User Info
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                as={Link}
                to="/published-articles"
                className="text-white"
              >
                Published Articles
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/bookmarks" className="text-white">
                Bookmarks
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink as={Link} to="/settings" className="text-white">
                <FaCog />
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* {window.location.pathname === "/" && <Home />} */}
    </div>
  );
};

export default NavbarComponent;
