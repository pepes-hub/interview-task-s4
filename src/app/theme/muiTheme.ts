import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Work Sans, sans-serif",
  },
});

export const muiTheme = createTheme(theme, {
  palette: {
    lightGrey: {
      main: "#F4F8FA",
    },
    salmon: {
      main: "#FFDBCB",
    },
    midnightPurple: {
      main: "#423C66",
    },
    blueGrey: {
      main: "rgba(30, 42, 50, 1)",
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          paddingLeft: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(233, 238, 242, 1)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(66, 60, 102, 1)",
            color: "rgba(89, 93, 123, 1)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            color: "rgba(89, 93, 123, 1)",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          height: "60px",
        },
        input: {
          fontFamily: "Rubik",
          fontWeight: "500",
          fontSize: "24px",
          lineHeight: "28px",
          color: "rgba(89, 93, 123, 1)",
          "&::placeholder": {
            color: "#BEBEBE",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "16px",
          fontWeight: "600",
          lineHeight: "20px",
          boxShadow: "none !important",
          height: "52px",
        },
        contained: {
          borderRadius: "5px",
          padding: "16px 24px",
        },
        containedPrimary: {
          backgroundColor: "#423C66",
          "&:hover": {
            backgroundColor: "#645D93",
          },
          "&:active": {
            backgroundColor: "#241E47",
          },
        },
        containedSecondary: {
          border: "1px solid",
          backgroundColor: "#fff",
          color: "rgba(89, 93, 123, 1)",
          borderColor: "rgba(89, 93, 123, 1)",
          "&:hover": {
            backgroundColor: "rgba(178, 167, 244, 0.1)",
          },
          "&:active": {
            backgroundColor: "rgba(178, 167, 244, 0.25)",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#fff",
          height: "80px",
          boxShadow: "none",
          padding: "24px 40px",
        },
      },
    },
    MuiDialog: {
      defaultProps: {
        hideBackdrop: true,
      },
      styleOverrides: {
        paper: {
          width: "600px",
          [theme.breakpoints.down("sm")]: {
            height: "100%",
            maxHeight: "100%",
            margin: "0px",
            width: "100%",
          },
          boxShadow: "0px 16px 32px 0px #1E2A3214",
          borderRadius: "0px",
        },
      },
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    lightGrey: Palette["primary"];
    salmon: Palette["primary"];
    midnightPurple: Palette["primary"];
    blueGrey: Palette["primary"];
  }

  interface PaletteOptions {
    lightGrey?: PaletteOptions["primary"];
    salmon?: PaletteOptions["primary"];
    midnightPurple?: PaletteOptions["primary"];
    blueGrey?: PaletteOptions["primary"];
  }
}
