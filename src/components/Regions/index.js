import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Grid, FormControl, Select, MenuItem } from '@material-ui/core';

const Regions = ({ classes, handleChange, region }) => {
  const theme = useTheme();

  return (
    <Grid item xs={6} md={7} style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <FormControl>
        {
          document.querySelector('.dark')
          ? 
          (<style>
            {`
            .MuiPopover-paper {
              background-color: ${theme.custom.palette.element} !important;
              color: #fff !important;
              top: 162px !important;
            }`}
          </style>)
          : null
        }
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