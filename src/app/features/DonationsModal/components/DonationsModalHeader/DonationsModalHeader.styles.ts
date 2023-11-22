import { Theme } from "@mui/material";

export const donationsModalStyles = (theme: Theme) => ({
  container: {
    backgroundColor: "salmon.main",
    padding: "32px 40px 24px 40px",
    flexDirection: "row",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      padding: "24px 24px 28px 24px",
      gap: "16px",
    },
  },
  titleContainer: {
    gap: "4px",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  title: {
    fontSize: "32px",
    lineHeight: "38.4px",
    color: "midnightPurple.main",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      height: "29px",
      fontSize: "24px",
      lineHeight: "28.8px",
    },
  },
  subtitle: {
    fontSize: "16px",
    lineHeight: "20px",
    color: "midnightPurple.main",
    fontWeight: 400,
    fontFamily: "Inter",
  },
});
