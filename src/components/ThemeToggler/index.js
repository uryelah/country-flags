import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const NavBar = () => {
  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark(prevTheme => !prevTheme);
    console.log(dark)
  };

  return (
    <Button onClick={handleClick}>
      {
        dark
        ? <WbSunnyIcon />
        : <Brightness3Icon />
      }
      Dark Mode
    </Button>
  )
};

export default NavBar;