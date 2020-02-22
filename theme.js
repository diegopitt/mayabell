import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    allVariants: {
      letterSpacing: '0.079em'
    },
    fontFamily: [
      '"Montserrat"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#90B27C',
    },
    secondary: {
      main: '#483119',
    },
    choco: {
      main: '#756858',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;