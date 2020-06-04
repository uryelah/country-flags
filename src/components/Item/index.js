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
      height: '100%',
      overflow: 'hidden',
    },
    subTitle: {
      fontWeight: 600,
    },
    summary: {
      margin: '4px 0',
    },
    title: {
      fontWeight: 800,
      marginBottom: '20px',
    },
    text: {
      boxSizing: 'border-box',
      fontSize: '14px',
      padding: '18px',
      paddingBottom: '24px',
      textAlign: 'left',
    },
  })
});

const Item = ({ country, handleClick, matches, matchesBig }) => {
  const classes = useStyles();

  const handleKeyDown = (e, country) => {
    if (e.key === 'Enter') {
      handleClick(country.name);
    };
  };

  return (
    <Grid
      item
      sm={12}
      md={6}
      lg={3}
    >
      <div
        role="button"
        tabIndex={0}
        onKeyDown={e => handleKeyDown(e, country)}
        onClick={() => handleClick(country)}
        style={{ cursor: 'pointer', border: 'none', backgroundColor: 'transparent', height: '100%', }}
      >
        <Paper className={classes.main} elevation={3}>
          <Box style={{ backgroundImage: `url(${country.flag})`, backgroundPosition: 'center center', backgroundSize: 'cover', display: 'flex', height: `${matches ? `calc((100vw - 96px) * 0.75)` : (matchesBig ? `calc((50vw - 96px) * 0.75)` : `calc((25vw - 96px) * 0.75)`)}`, width: 'auto' }} />
          <Box className={classes.text}>
            <Typography className={classes.title} variant="h5" component="h2">
              {
                country.name
              }
            </Typography>
            <p className={classes.summary}><span className={classes.subTitle}>Population:</span> {country.population}</p>
            <p className={classes.summary}><span className={classes.subTitle}>Region:</span> {country.region}</p>
            <p className={classes.summary}><span className={classes.subTitle}>Capital:</span> {country.capital}</p>
          </Box>
        </Paper>
      </div>
    </Grid>
  )
}

export default Item;