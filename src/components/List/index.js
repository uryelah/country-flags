import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const List = ({ actions, state }) => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = () => {
    actions.fetchSubscription('https://restcountries.eu/rest/v2/all', {
      method: 'GET',
    });
  };

  useEffect(fetchCountries, []);

  useEffect(() => {
    setCountries(state.subscription);
    console.log(state.subscription)
  }, [state.subscription]);

  return (
    <Grid container spacing={4}>
      {
        countries && countries.map(country => (
          <Grid key={country.alpha2Code} item xs={12} sm={6} md={3}>
            <Paper elevation={3}>
              <Box style={{ display: 'flex' }}>
                <img src={country.flag} alt={`${country.name} flag`}/>
              </Box>
              <Typography variant="h5" component="h2">
                {
                  country.name
                }
              </Typography>
              <p><strong>Population:</strong> {country.population}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </Paper>
          </Grid>
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

export default connect(mapStateToProps, mapActionsToProps)(List);