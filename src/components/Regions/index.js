import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const Regions = ({ classes, handleChange, region }) => {
  return (
    <Grid item xs={6} md={7} style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <FormControl>
        <Select
          style={{ minWidth: '200px' }}
          onChange={handleChange}
          variant="outlined"
          value={region}
          className={classes.input}
        >
          <MenuItem value="All">
            <span>Filter by Region</span>
          </MenuItem>
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Americas">Americas</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Grid>
  )
};

export default Regions;