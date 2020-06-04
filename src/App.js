import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { appTheme, darkTheme } from './appStyles';

import Page from './components/Page';

function App({ state }) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    setTheme(state.dark ? darkTheme : appTheme());
  }, [state]);

  return (
    <ThemeProvider theme={theme}>
      <Page/>
    </ThemeProvider>
  );
}

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

export default connect(mapStateToProps, null)(App);
