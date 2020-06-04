import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Grid, Toolbar, Typography} from '@material-ui/core';
import HideOnScroll from '../HideOnScroll';
import ThemeToggler from '../../containers/ThemeToggler';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      boxShadow: theme.shadows[2],
      color: theme.custom ? theme.custom.palette.text : 'inherit',
      maxWidth: `${theme.breakpoints.values.xl}px`,
    },
    aboveMaxWidth: {
      left: `calc((100vw - ${theme.breakpoints.values.xl}px)/2)`,
    },
    title: {
      fontWeight: 800,
    },
  })
});

const NavBar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const mediaMatch = window.matchMedia(`(min-width: ${theme.breakpoints.values.xl - 1}px)`);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar className={matches ? `${classes.aboveMaxWidth} ${classes.main}` : classes.main}>
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