import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

// Add new variables to the Theme and ThemeOptions, if necessary
// https://v5.mui.com/material-ui/customization/theming/#typescript
declare module '@mui/material/styles' {
  interface Theme { }

  // allow configuration using `createTheme`
  interface ThemeOptions { }
}

const theme = extendTheme({
  colorSchemes: { },
});

export default theme;
