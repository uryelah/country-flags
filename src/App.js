import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { appTheme, darkTheme } from './appStyles';

import Page from './containers/Page';

function App({ state }) {
  const [theme, setTheme] = useState(appTheme());

  useEffect(() => {
    setTheme(state.dark ? darkTheme : appTheme());
  }, [state]);

  return (
    <ThemeProvider theme={theme}>
      <Page className={state.dark ? 'dark' : 'light'}/>
    </ThemeProvider>
  );
}

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

export default connect(mapStateToProps, null)(App);
