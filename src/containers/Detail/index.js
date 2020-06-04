import React, { useEffect, useState } from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import { makeStyles } from '@material-ui/core/styles';

import CountryDetail from '../../components/Detail';
import Loader from '../../components/Loader';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      color: theme.custom ? theme.custom.palette.text : 'inherit',
      fontSize: '16px',
    },
  })
});

const Detail = ({ actions, history, match, state }) => {
  const [item, setItem] = useState(null);
  const [neighbors, setNeighbors] = useState([]);

  const classes = useStyles();

  const getItem = () => {
    actions.fetchSubscription(`https://restcountries.eu/rest/v2/name/${match.params.countryName}`, {
      method: 'GET',
    }, true);
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
    if (item && item.borders) {
      item.borders.forEach(code => populateNeighbors(code));
    };
  }, [item]);

  return (
    <div className={classes.main} key={item}>
      {
        state.loading
          ? <Loader options={{ scope: 'element' }} />
          : (
            item && <CountryDetail item={item} neighbors={neighbors} handleBack={handleBack} handleRedirect={handleRedirect} />
          )
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