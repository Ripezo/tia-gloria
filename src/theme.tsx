import { Caveat, Indie_Flower, Roboto } from "next/font/google";
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
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#ffffff33'
        }
      }
    },
    MuiTable: {
      styleOverrides: {
        root: {
          margin: '16px 0'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: 0,
          border: 'none'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: caveat.style.fontFamily,
          minWidth: '160px',
          margin: '16px',
          fontSize: '24px',
          fontWeight: '600',
          textTransform: 'capitalize',
          borderRadius: '8px'
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
    h4: {
      textAlign: 'center',
    },
    body1: {
      fontFamily: roboto.style.fontFamily
    }
  },
});

export default theme;
