import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../NavBar';
import Detail from '../Detail';
import List from '../List';
import '../../App.css';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: theme.custom ? theme.custom.palette.bg : 'transparent',
      boxSizing: 'border-box',
      margin: '0 auto',
      maxWidth: `${theme.breakpoints.values.xl}px`,
      minHeight: '100vh',
      padding: '24px 48px',
    },
  })
});

function Page() {
  const classes = useStyles();

  return (
    <div className={`${classes.main} App`}>
      <NavBar />
      <Switch>
        <Route path="/:countryName" component={Detail} exact />
        <Route path="/" component={List} />
      </Switch>
    </div>
  );
}

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

export default connect(mapStateToProps, null)(Page);
