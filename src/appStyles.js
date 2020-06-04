import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles'

let defaultTheme;

makeStyles(theme => {
  defaultTheme = theme;
  return ({});
});

const baseTheme = {
  ...defaultTheme,
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 768,
      lg: 960,
      xl: 1440,
    },
  },
  typography: {
    "htmlFontSize": 16,
    "fontFamily": "\"Nunito Sans\", sans-serif",
    "fontSize": 14,
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500,
    "fontWeightBold": 700,
    "h1": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 300,
      "fontSize": "6rem",
      "lineHeight": 1.167,
      "letterSpacing": "-0.01562em"
    },
    "h2": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 300,
      "fontSize": "3.75rem",
      "lineHeight": 1.2,
      "letterSpacing": "-0.00833em"
    },
    "h3": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "3rem",
      "lineHeight": 1.167,
      "letterSpacing": "0em"
    },
    "h4": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "2.125rem",
      "lineHeight": 1.235,
      "letterSpacing": "0.00735em"
    },
    "h5": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1.5rem",
      "lineHeight": 1.334,
      "letterSpacing": "0em"
    },
    "h6": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 500,
      "fontSize": "1.25rem",
      "lineHeight": 1.6,
      "letterSpacing": "0.0075em"
    },
    "subtitle1": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.75,
      "letterSpacing": "0.00938em"
    },
    "subtitle2": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.57,
      "letterSpacing": "0.00714em"
    },
    "body1": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "1rem",
      "lineHeight": 1.5,
      "letterSpacing": "0.00938em"
    },
    "body2": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.875rem",
      "lineHeight": 1.43,
      "letterSpacing": "0.01071em"
    },
    "button": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 500,
      "fontSize": "0.875rem",
      "lineHeight": 1.75,
      "letterSpacing": "0.02857em",
      "textTransform": "uppercase"
    },
    "caption": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 1.66,
      "letterSpacing": "0.03333em"
    },
    "overline": {
      "fontFamily": "\"Nunito Sans\", sans-serif",
      "fontWeight": 400,
      "fontSize": "0.75rem",
      "lineHeight": 2.66,
      "letterSpacing": "0.08333em",
      "textTransform": "uppercase"
    }
  },
};

const appTheme = () => {
  const newTheme = {
    ...baseTheme,
    custom: {
      palette: {
        element: 'hsl(0, 0%, 100%)',
        bg: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)',
        input: 'hsl(0, 0%, 52%)',
        inverse: {
          bg: 'hsl(207, 26%, 17%)',
          text: 'hsl(0, 0%, 100%)',
        },
      }
    },
    shadows: [
      "none",

      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.07),0px 1px 3px 0px rgba(0,0,0,0.04)",

      "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.07),0px 1px 5px 0px rgba(0,0,0,0.04)",

      "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.07),0px 1px 8px 0px rgba(0,0,0,0.04)",

      "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.07),0px 1px 10px 0px rgba(0,0,0,0.04)",

      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.07),0px 1px 14px 0px rgba(0,0,0,0.04)",

      "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.07),0px 1px 18px 0px rgba(0,0,0,0.04)",

      "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.07),0px 2px 16px 1px rgba(0,0,0,0.04)",

      "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.07),0px 3px 14px 2px rgba(0,0,0,0.04)",

      "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.07),0px 3px 16px 2px rgba(0,0,0,0.04)",

      "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.07),0px 4px 18px 3px rgba(0,0,0,0.04)",

      "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.07),0px 4px 20px 3px rgba(0,0,0,0.04)",

      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.07),0px 5px 22px 4px rgba(0,0,0,0.04)",

      "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.07),0px 5px 24px 4px rgba(0,0,0,0.04)",

      "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.07),0px 5px 26px 4px rgba(0,0,0,0.04)",

      "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.07),0px 6px 28px 5px rgba(0,0,0,0.04)",

      "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.07),0px 6px 30px 5px rgba(0,0,0,0.04)",

      "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.07),0px 6px 32px 5px rgba(0,0,0,0.04)",

      "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.07),0px 7px 34px 6px rgba(0,0,0,0.04)",

      "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.07),0px 7px 36px 6px rgba(0,0,0,0.04)",

      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.07),0px 8px 38px 7px rgba(0,0,0,0.04)",

      "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.07),0px 8px 40px 7px rgba(0,0,0,0.04)",

      "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.07),0px 8px 42px 7px rgba(0,0,0,0.04)",

      "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.07),0px 9px 44px 8px rgba(0,0,0,0.04)",

      "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.07),0px 9px 46px 8px rgba(0,0,0,0.04)",
    ],
  };

  return createMuiTheme(newTheme)
};

const darkTheme = () => {
  const newTheme = {
    ...baseTheme,
    custom: {
      palette: {
        element: 'hsl(209, 23%, 22%)',
        bg: 'hsl(207, 26%, 17%)',
        text: 'hsl(0, 0%, 100%)',
        inverse: {
          bg: 'hsl(0, 0%, 98%)',
          text: 'hsl(200, 15%, 8%)',
          input: 'hsl(0, 0%, 52%)',
        }
      }
    },
  };

  return createMuiTheme(newTheme)
}

export { appTheme, darkTheme };