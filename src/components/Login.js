import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/userActions";
import { clearErrors } from "../actions/errorActions";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  NavItem,
  NavLink,
  Alert,
} from "reactstrap";
const Login = () => {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const { msg } = useSelector((state) => state.error.msg);
  const isAuth = useSelector((state) => state.user.isAuth);

  const toggle = () => {
    dispatch(clearErrors());
    setModal(!modal);
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(user));

    if (modal) {
      if (isAuth) {
        setModal(false);
      }
    }
  };

  return (
    <>
      <NavItem>
        <NavLink onClick={toggle}>Login</NavLink>
      </NavItem>

      <Modal isOpen={modal} toggle={toggle}>
        <Form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle}>Please log in</ModalHeader>
          {msg && <Alert color="danger">{msg}</Alert>}
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                required={true}
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                required={true}
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit">
              Submmit
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Login;
