import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" dark expand="md" className="mb-5">
        <Container>
          <NavbarBrand to="/">chartbook</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-2">
                <NavLink to="/" exact>
                  Charts
                </NavLink>
              </NavItem>
              <NavItem className="mr-2">
                <NavLink to="/login" exact>
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/register" exact>
                  Register
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
