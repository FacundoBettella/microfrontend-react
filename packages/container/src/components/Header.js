import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

import "./Header.css";

export default function Header({ signedIn, onSignOut }) {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <div>
      <AppBar
        position='static'
        color='default'
        elevation={0}
        className='container-appBar'
      >
        <Toolbar className='container-toolbar'>
          <Typography
            variant='h6'
            color='inherit'
            noWrap
            component={RouterLink}
            to='/'
          >
            Microfrontend App
          </Typography>
          <Button
            color='primary'
            variant='outlined'
            className='container-link'
            component={RouterLink}
            to={signedIn ? "/" : "/auth/signin"}
            onClick={onClick}
          >
            {signedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
