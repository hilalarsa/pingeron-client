import React, { Component } from "react";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core";

import css from "./style.css";

export default class Login extends Component {
  render() {
    return (
      <div>
        <Card className="loginCard">
          <CardContent>
            <Typography color="textSecondary" gutterBottom className="typo">
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              Hello
            </Typography>
            <Typography color="textSecondary">adjective</Typography>
            <Typography component="p">Well well well</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
