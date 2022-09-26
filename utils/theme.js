import { createTheme  } from '@material-ui/core/styles';
import { lightBlue, teal, blue, red } from '@material-ui/core/colors';

const theme = createTheme ({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: '#9F414E'
    },
    common: {
      brand: {
        extraLight: '#8B94D0',
        light: '#606CBE',
        main: '#414e9e',
        dark: '#333D7D',
        // extraLight: '#e5e9ff',
        // light: '#464e7c',
        // main: '#18225c',
        // dark: '#101740',
      },
    }
  },
});

export default theme