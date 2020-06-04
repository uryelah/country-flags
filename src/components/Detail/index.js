import React from 'react';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as SubscriptionActions from '../../actions/subscription';

import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Grid,
  Typography
} from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

const useStyles = makeStyles(theme => {
  return ({
    back: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      boxShadow: theme.shadows[1],
      color: theme.custom ? theme.custom.palette.text : 'inherit',
      fontSize: '12px',
      fontWeight: 600,
      padding: '5px 24px',
    },
    backIco: {
      marginLeft: '-5px',
      paddingRight: '4px',
    },
    chip: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      color: theme.custom ? theme.custom.palette.text : 'inherit',
      fontSize: '10px',
      fontWeight: 600,
      margin: '5px 3px',
      minWidth: '80px',
    },
    content: {
      padding: '24px 0 24px 48px',
    },
    flag: {
      boxShadow: theme.shadows[5],
      display: 'flex',
    },
    main: {
      color: theme.custom ? theme.custom.palette.text : 'inherit',
      fontSize: '16px',
    },
    textColumn: {
      textAlign: 'left',
    },
    title: {
      fontWeight: 800,
    },
  })
});

const Detail = ({ handleBack, handleRedirect,  neighbors, item }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Button className={classes.back} onClick={handleBack} variant="outlined">
          <KeyboardBackspaceIcon className={classes.backIco} />
                  Back
                </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className={classes.flag}>
          <img src={item.flag} alt={`${item.name} flag`} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid className={classes.content} container spacing={5}>
          <Grid className={classes.textColumn} style={{ paddingBottom: 0 }} item xs={12}>
            <Typography className={classes.title} variant="h5" component="h2">
              {item.name}
            </Typography>
          </Grid>
          <Grid className={classes.textColumn} item xs={6}>
            <p><strong>Native Name: </strong>{item.nativeName}</p>
            <p><strong>Population: </strong>{item.population}</p>
            <p><strong>Region: </strong>{item.region}</p>
            <p><strong>Sub Region: </strong>{item.subregion}</p>
            <p><strong>Capital: </strong>{item.capital}</p>
          </Grid>
          <Grid className={classes.textColumn} item xs={6}>
            <p><strong>Top Level Domain: </strong>{item.topLevelDomain && item.topLevelDomain[0]}</p>
            <p><strong>Currencies: </strong>
              {
                item.currencies && item.currencies.map(currency => currency.name).join(', ')
              }
            </p>
            <p><strong>Languages: </strong>
              {
                item.languages && item.languages.map(language => language.name).join(', ')
              }
            </p>
          </Grid>
          <Grid item xs={12} style={{ display: 'flex' }}>
            <p style={{ flexShrink: '0', paddingRight: '15px ' }}>
              <strong style={{ whiteSpace: 'no-wrap' }}>
                Border Countries:
                      </strong>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', paddingTop: '5px' }}>
              {
                neighbors.map(borderCountry => (
                  <Button className={classes.chip} onClick={() => handleRedirect(borderCountry)} variant="outlined">
                    {borderCountry}
                  </Button>
                ))
              }
            </div>
          </Grid>
        </Grid>
      </Grid>
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

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Detail));