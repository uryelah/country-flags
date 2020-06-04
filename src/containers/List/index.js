import React, { useLayoutEffect, useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Item from '../../components/Item';
import Regions from '../../components/Regions';
import Search from '../../components/Search';
import Loader from '../../components/Loader';

import './styles.css';

const useStyles = makeStyles(theme => {
  return ({
    color: {
      color: theme.custom ? (theme.custom.palette.input ? theme.custom.palette.input : theme.custom.palette.text) : 'inherit',
    },
    main: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      color: theme.custom ? theme.custom.palette.text : 'inherit',
    },
    input: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      borderRadius: '4px',
      boxShadow: theme.shadows[2],
      color: theme.custom ? (theme.custom.palette.input ? theme.custom.palette.input : theme.custom.palette.text) : 'inherit',
      fontWeight: 600,
    },
  })
});

const List = ({ actions, history, state, cache }) => {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState('All');
  const [search, setSearch] = useState('');
  const [matches, setMatches] = useState(false);
  const [matchesBig, setMatchesBig] = useState(false);
  const [size, setSize] = useState([0, 0]);

  const theme = useTheme();
  const classes = useStyles();

  const fetchCountries = () => {
    if (!cache || (state.subscription && state.subscription.length === 0)) {
      const url = region === 'All' ? 'https://restcountries.eu/rest/v2/all?fields=name;flag;population;region;capital' : `https://restcountries.eu/rest/v2/region/${region}?fields=name;flag;population;region;capital`;
      actions.fetchSubscription(url, {
        method: 'GET',
      });
    }
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

  const checkWidth = () => {
    setSize([window.innerWidth, window.innerHeight])
    
    const width = window.innerWidth;

    if (width <= theme.breakpoints.values.md) {
      setMatches(true);
      setMatchesBig(false);
    } else if (width <= theme.breakpoints.values.lg) {
      setMatches(false);
      setMatchesBig(true);
    } else {
      setMatches(false);
      setMatchesBig(false);
    }
  };

  const checkOnResize = () => {
    window.addEventListener('resize', () => {
      checkWidth();
    });
  };

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(checkWidth, []);

  useEffect(checkOnResize, [size[0]]);

  useEffect(fetchCountries, [region]);

  useEffect(() => {
    setCountries(state.subscription);
  }, [state.subscription]);

  useEffect(searchCountries, [search]);

  return (
    <Grid container spacing={4} style={{ boxSize: 'border-box', margin: '0 auto', maxWidth: '100%' }}>
      {
        state.loading
          ? <Loader options={{scope: 'element'}} />
          : (
            <>
              <Grid item xs={12}>
                <Grid container justify="space-between" alignItems="center" spacing={9}>
                  <Search classes={classes} handleSearch={handleSearch} search={search} />
                  <Regions classes={classes} handleChange={handleChange} region={region} />
                </Grid>
              </Grid>
              {
                countries && countries.map(country => (
                  <Item key={country.name} country={country} matches={matches} matchesBig={matchesBig} handleClick={handleClick} />
                ))
              }
            </>
          )
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