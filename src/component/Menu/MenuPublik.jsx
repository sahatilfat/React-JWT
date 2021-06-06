import React, { useContext, useState } from "react";
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function MenuPublik() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark" color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem></NavItem>
          </Nav>
          <NavbarText>
            <NavLink to={"/login"}>LOGIN</NavLink>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuPublik;
