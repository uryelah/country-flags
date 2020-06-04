import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      fontSize: '16px',
    },
  })
});

const Detail = ({ actions, history, match, state }) => {
  const [item, setItem] = useState(null);
  const [neighbors, setNeighbors] = useState([]);

  const classes = useStyles();

  const getItem = () => {
    if (state.item && state.item.name === match.params.countryName) {
      setItem(state.item);
    } else {
      actions.fetchSubscription(`https://restcountries.eu/rest/v2/name/${match.params.countryName}`, {
        method: 'GET',
      }, true);
    }
  };

  const handleBack = () => {
    history.push('/', state);
  };

  const populateNeighbors = code => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${code}?fields=name`, {
      method: 'GET',
    }).then(res => res.json().then(country => setNeighbors(prevState => [...prevState, country.name])));
  };

  const handleRedirect = country => {
    history.push(`/${country}`, state);
  };

  useEffect(getItem, [match.params.countryName]);

  useEffect(() => {
    setItem(state.item);
  }, [state.item]);

  useEffect(() => {
    if (item) {
      item.borders.forEach(code => populateNeighbors(code));
    };
  }, [item]);

  return (
    <div className={classes.main} key={item}>
      {
        item
          ? (
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Button onClick={handleBack} variant="outlined">
                  <KeyboardBackspaceIcon/>
                  Back
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <div style={{ display: 'flex' }}>
                  <img src={item.flag} alt={`${item.name} flag`} />
                </div>
              </Grid>
              <Grid item xs={12} md={6}>
                <h1>{item.name}</h1>
                <p><strong>Native Name: </strong>{item.nativeName}</p>
                <p><strong>Population: </strong>{item.population}</p>
                <p><strong>Region: </strong>{item.region}</p>
                <p><strong>Sub Region: </strong>{item.subregion}</p>
                <p><strong>Capital: </strong>{item.capital}</p>
                <p><strong>Top Level Domain: </strong>{item.topLevelDomain && item.topLevelDomain[0]}</p>
                <p><strong>Currencies: </strong>
                  {
                    item.currencies.map(currency => currency.name).join(', ')
                  }
                </p>
                <p><strong>Languages: </strong>
                  {
                    item.languages.map(language => language.name).join(', ')
                  }
                </p>
                <hr />
                <div>
                  {
                    neighbors.map(borderCountry => (
                      <Button onClick={() => handleRedirect(borderCountry)} variant="outlined" variant="outlined">
                        {borderCountry}
                      </Button>
                    ))
                  }
                </div>
              </Grid>
            </Grid>
          )
          : <p>Loading...</p>
      }
    </div>
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

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Detail));