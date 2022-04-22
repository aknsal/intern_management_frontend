import { createTheme} from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#585858',
        },
        secondary: {
          main: '#ffc815',
        },
        background: {
            paper: '#f5f5f5',
        },
      },
    shape: {
      borderRadius: 8,
    },
});

export default lightTheme;
