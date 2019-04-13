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

import { UsernameYup, PasswordYup } from "../../helper/YupValidationSchema"

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
              name="Username"
              label="Username"
              placeholder="Username"
              validation={UsernameYup}
            />
            <ReTextField
              id="Password"
              name="Password"
              label="Password"
              placeholder="Password"
              validation={PasswordYup}
            />
          </CardContent>
            <Button size="large">Login</Button>
        </Card>
      </div>
    );
  }
}
