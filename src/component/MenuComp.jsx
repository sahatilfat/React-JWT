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
  NavLink,
} from "reactstrap";
import { AuthContext } from "../App";

function MenuComp() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { state, dispatch } = useContext(AuthContext);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark" color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>
            <Button
              color="default"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              {state.isAuthenticated && <NavLink>LOGOUT</NavLink>}
            </Button>
          </NavbarText> */}
          <NavbarText>
            <Button
              color="default"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              {state.isAuthenticated && <NavLink>LOGOUT</NavLink>}
            </Button>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default MenuComp;
