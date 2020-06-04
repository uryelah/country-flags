import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import './styles.css';

const Search = ({ classes, handleSearch, search }) => {
  return (
    <Grid item xs={6} md={5} className={classes.input}>
    <TextField
      fullWidth
      variant="outlined"
      value={search}
      placeholder="Search for a country..."
      onChange={handleSearch}
      InputProps={{
        startAdornment: (
          <InputAdornment>
            <IconButton>
              <SearchIcon className={classes.color}/>
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  </Grid>
  )
};

export default Search;