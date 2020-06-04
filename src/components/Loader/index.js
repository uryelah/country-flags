import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  circle: {
    color: theme.custom ? (theme.custom.palette.input ? theme.custom.palette.input : theme.custom.palette.text) : 'inherit',
  },
  default: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    width: '100%',
  },
  screen: {
    background: `linear-gradient(to bottom, #f2f2f2, ${theme.custom.palette.bg})`,
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    zIndex: '2000',
  },
  element: {
    height: '100%',
    padding: theme.spacing(2),
    position: 'relative',
  },
}));

function Loader({ options }) {
  const classes = useStyles();

  return (
    <Container className={`${classes[options.scope]} ${classes.default}`}>
      <CircularProgress 
        size={48}
        thickness={6}
        className={classes.circle}
      />
    </Container>
  );
}

export default Loader;