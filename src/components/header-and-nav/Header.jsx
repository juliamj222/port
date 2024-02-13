import logo from "../../assets/logo.png";
import "../../App.css";
import React, { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

function HeaderAndNav() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  // Close the navbar when a link is clicked
  const closeNavbar = () => setCollapsed(true);

  return (
    <>
      <div id="headerWrap">
        <Navbar>
          <Link to="/" className="logoHome">
            {" "}
            <img src={logo} alt="Logo" id="logo" />
          </Link>
          <NavbarToggler onClick={toggleNavbar} id="toggler" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav className="Nav">
              <NavItem>
                <Link to="/projects" className="nav-link" onClick={closeNavbar}>
                  {" "}
                  Projects
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/education-work"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  {" "}
                  Education and Professional Experience
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/hobbies" className="nav-link" onClick={closeNavbar}>
                  {" "}
                  Hobbies and Interests
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/more-about-me"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  {" "}
                  Transferable Skills
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default HeaderAndNav;
