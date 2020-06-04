import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => {
  return ({
    main: {
      backgroundColor: theme.custom ? theme.custom.palette.element : 'transparent',
      color: theme.custom ? theme.custom.palette.text : 'inherit',
      overflow: 'hidden',
    },
    title: {
      fontWeight: 800,
    },
    text: {
      boxSizing: 'border-box',
      fontSize: '14px',
      padding: '18px',
      textAlign: 'left',
    },
  })
});

const Item = ({ country, handleClick }) => {
  const classes = useStyles();

  const handleKeyDown = (e, country) => {
    if (e.key === 'Enter') {
      handleClick(country.name);
    };
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={e => handleKeyDown(e, country)}
        onClick={() => handleClick(country)}
        style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent' }}
      >
        <Paper className={classes.main} elevation={3}>
          <Box style={{ backgroundImage: `url(${country.flag})`, backgroundPosition: 'center center', backgroundSize: 'cover', display: 'flex', height: '211.117px' }} />
          <Box className={classes.text}>
            <Typography className={classes.title} variant="h5" component="h2">
              {
                country.name
              }
            </Typography>
            <p><strong>Population:</strong> {country.population}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </Box>
        </Paper>
      </div>
    </Grid>
  )
}

export default Item;