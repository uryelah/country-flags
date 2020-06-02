import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HideOnScroll from '../HideOnScroll';
import ThemeToggler from '../ThemeToggler';

const NavBar = (props) => {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container justify="space-between">
              <Typography variant="h6">Where in the world?</Typography>
              <ThemeToggler />
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  )
}

export default NavBar;