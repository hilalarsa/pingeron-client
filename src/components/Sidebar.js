import React, { Component } from 'react';
import { Link } from "react-router-dom";

import {AppBar,Drawer, Divider,List,ListItem, ListItemText,Toolbar, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import routes from "../routes/routes"

const DRAWER_WIDTH = 200

const styles = theme => ({
  appBar:{
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper:{
    width: DRAWER_WIDTH
  },
  list:{
    top:"70px"
  }
})

class Sidebar extends Component {

  componentDidMount = () => {
    console.log("mount")
  }
  
  render() {
    const { classes } = this.props;
    console.log("render sidebar")
    return (
      <div className="Sidebar">
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Pingeron App
          </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" classes={{paper: classes.drawerPaper}}>
        <List className={classes.list}>
          {routes.map(item=>
            <ListItem button>
              <ListItemText>
                  <Link to={item.to}>{item.linkText}</Link>
              </ListItemText>
              <Divider/>
            </ListItem>
          )}
        </List>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(Sidebar);