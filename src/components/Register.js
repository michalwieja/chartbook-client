import React from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
const Register = () => {
  return (
    <Container>
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Trader</Label>
          <Input type="name" name="name" placeholder="Trader" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" placeholder="email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" placeholder="password" />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    </Container>
  );
};

export default Register;
