import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    yellow: {
      main: "#F4D04E",
    },
    grey: {
      main: "#6B6B6B",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
