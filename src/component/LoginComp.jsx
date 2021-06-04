import React, { Fragment, useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../App";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
  CardImg,
} from "reactstrap";

const qs = require("querystring");
const api = "http://localhost:3001";

function LoginComp() {
  const { dispatch } = useContext(AuthContext);

  const initialState = {
    email: "",
    password: "",
    isSubmitting: false,
    errorMessage: null,
  };

  const [data, setData] = useState(initialState);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    const requestBody = {
      email: data.email,
      password: data.password,
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    axios
      .post(api + "/auth/api/v1/login", qs.stringify(requestBody), config)
      .then((res) => {
        if (res.data.success === true) {
          dispatch({
            type: "LOGIN",
            payload: res.data,
          });
        } else {
          setData({
            ...data,
            isSubmitting: false,
            errorMessage: res.data.Message,
          });
        }
        throw res;
      });
  };

  return (
    <Fragment>
      <Container>
        <br />
        <Row>
          <Col>
            <CardImg src="/img/3.png" />
          </Col>
          <Col>
            <h1>Login Form</h1>
            <hr />
            <Form onSubmit={handleFormSubmit}>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  value={data.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="masukkan email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  value={data.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="masukkan password"
                />
              </FormGroup>
              <br />

              {data.errorMessage && (
                <div className="alert alert-danger" role="alert">
                  {data.errorMessage}
                </div>
              )}

              <Button disabled={data.isSubmitting}>
                {data.isSubmitting ? "...Loading" : "Login"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default LoginComp;
