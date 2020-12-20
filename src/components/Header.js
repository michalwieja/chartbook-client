import React, { useState } from "react";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuth = useSelector((state) => state.user.isAuth);
  const user = useSelector((state) => state.user.user);

  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();

  const loggedLinks = (
    <>
      {user && (
        <NavItem>
          <span className="navbar-text mr-3">welcome {user.name}</span>{" "}
        </NavItem>
      )}
      <NavItem>
        <Button onClick={() => dispatch(logout())}>Logout</Button>
      </NavItem>
    </>
  );
  const guestLinks = (
    <>
      <Login />
      <Register />
    </>
  );

  return (
    <div>
      <Navbar color="primary" dark expand="md" className="mb-5">
        <Container>
          <Link to="/" className="h1">
            chartbook
          </Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {isAuth ? loggedLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Example;
