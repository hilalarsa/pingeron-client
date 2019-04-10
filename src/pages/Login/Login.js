import React, { Component } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

import css from "./style.css";

import ReTextField from "../../components/ReTextField"

import { SignupSchema } from "../../helper/YupValidationSchema"

export default class Login extends Component {
  render() {
    return (
      <div>
        <Card className="loginCard">
          <CardContent>
            <Typography color="textSecondary" gutterBottom className="typo">
              Login
            </Typography>
            <ReTextField
              id="Username"
              label="Username"
              placeholder="Username"
            />
            <ReTextField
              id="Password"
              label="Password"
              placeholder="Password"
            />
          </CardContent>
            <Button size="large">Login</Button>
        </Card>
      </div>
    );
  }
}
