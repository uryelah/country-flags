import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Item from '../Item';
import Regions from '../Regions';
import Search from '../Search';

import './styles.css';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      color: theme.custom ? theme.custom.palette.text : 'inherit',
    },
    input: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      borderRadius: '4px',
      boxShadow: theme.shadows[2],
      color: theme.custom ? theme.custom.palette.input : 'inherit',
      fontWeight: 600,
    },
  })
});

const List = ({ actions, history, state }) => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('All');
  const [search, setSearch] = useState('');

  const classes = useStyles();

  const fetchCountries = () => {
    const url = region === 'All' ? 'https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital' : `https://restcountries.eu/rest/v2/region/${region}?fields=name;flag;population;region;capital`;
    actions.fetchSubscription(url, {
      method: 'GET',
    });
  };

  const handleClick = country => {
    actions.storeSubscriptionItem(country);
    history.push(`/${country.name}`, state);
  };

  const handleChange = e => {
    setRegion(e.target.value);
  };

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  const searchCountries = () => {
    if (search.length >= 3) {
      actions.fetchSubscription(`https://restcountries.eu/rest/v2/name/${search}?fields=name;flag;population;region;capital`, {
        method: 'GET',
      });
    } else if (search.length === 0) {
      const url = region === 'All' ? 'https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital' : `https://restcountries.eu/rest/v2/region/${region}?fields=name;flag;population;region;capital`;

      actions.fetchSubscription(url, {
        method: 'GET',
      });
    }
  };

  useEffect(fetchCountries, [region]);

  useEffect(() => {
    setCountries(state.subscription);
  }, [state.subscription]);

  useEffect(searchCountries, [search]);

  return (
    <Grid container spacing={4} style={{ boxSize: 'border-box', margin: '0 auto', maxWidth: '100%' }}>
      <Grid item xs={12}>
        <Grid container justify="space-between">
          <Search classes={classes} handleSearch={handleSearch} search={search} />
          <Regions classes={classes} handleChange={handleChange} region={region} />
        </Grid>
      </Grid>
      {
        countries && countries.map(country => (
          <Item key={country.name} country={country} handleClick={handleClick} />
        ))
      }
    </Grid>
  )
}

function mapStateToProps({ state, group }) {
  return { state: { ...state, ...group } };
}

function mapActionsToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...SubscriptionActions }, dispatch),
  };
}

export default connect(mapStateToProps, mapActionsToProps)(withRouter(List));