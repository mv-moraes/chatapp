// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins', // Fonte primária
        'Arial', // Fontes alternativas
        'sans-serif',
      ].join(','),
    },
    palette: {
      primary: {
        main: '#4174B4', // Cor de foco do TextField
      },
    },
  });
  
export default theme;
