import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const useStyles = makeStyles(theme => {
  return ({
    icon: {
      margin: '0 5px',
    },
    dark: {
      transform: 'rotate(-45deg) scaleX(-1)',
    },
    text: {
      fontWeight: '600',
    },
    main: {
      color: theme.custom ? (theme.custom.palette.input ? theme.custom.palette.input : theme.custom.palette.text) : 'inherit',
      fontSize: '14px',
    },
  })
});

const ThemeToggler = ({ state, actions }) => {
  const [dark, setDark] = useState(false);

  const classes = useStyles();

  const handleClick = () => {
    setDark(prevTheme => !prevTheme);
    actions.toggleDarkTheme();
  };

  useEffect(() => {
    setDark(state.dark);
  }, []);

  return (
    <Button className={classes.main} onClick={handleClick}>
      {
        dark
        ? (
          <>
            <WbSunnyIcon className={classes.icon}/>
            <span className={classes.text}>Light Mode</span>
          </>
        )
        : (
          <>
            <Brightness3Icon className={`${classes.icon} ${classes.dark}`}/>
            <span className={classes.text}>Dark Mode</span>
          </>
        )
      }
    </Button>
  )
};


function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(ThemeToggler);