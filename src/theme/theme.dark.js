import { createTheme} from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        type: 'dark',
        mode:'dark',
        primary: {
          main: '#ffc815',
        },
        secondary: {
          main: '#585858',
        },
        background: {
          paper: '#333333',
          default: '#2f2f2f',
        },
      },
    shape: {
      borderRadius: 8,
    },
});

export default darkTheme;
