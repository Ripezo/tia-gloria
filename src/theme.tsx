import { Caveat, Indie_Flower, Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const indieFlower = Indie_Flower({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const caveat = Caveat({
  weight: [ "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {

        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: caveat.style.fontFamily,
          minWidth: '160px',
        }
      }
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: "#ffcf00",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: caveat.style.fontFamily,
    body1: {
      fontFamily: roboto.style.fontFamily
    }
  },
});

export default theme;
