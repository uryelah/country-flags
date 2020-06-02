import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Detail from './components/Detail';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/:countryName" component={Detail} exact />
        <Route path="/" component={List} />
      </Switch>
    </div>
  );
}

export default App;
