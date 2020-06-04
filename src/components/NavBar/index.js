import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HideOnScroll from '../HideOnScroll';
import ThemeToggler from '../ThemeToggler';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      boxShadow: theme.shadows[2],
      color: theme.custom ? theme.custom.palette.text : 'inherit',
    },
    title: {
      fontWeight: 800,
    },
  })
});

const NavBar = (props) => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={classes.main}>
          <Toolbar>
            <Grid container justify="space-between">
              <Typography className={classes.title} variant="h6" component="h1">Where in the world?</Typography>
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