import { Theme } from "@mui/material";

export const donationsModalContentStyles = (theme: Theme) => ({
  container: {
    padding: "32px 40px",
    gap: "32px",
  },
  valuesBlock: {
    flexDirection: "row",
    marginBottom: "32px",
    gap: "24px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  buttonsContainer: {
    padding: "8px",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "27px",
  },
  button: {
    width: "100%",
  },
  summaryBlock: {
    marginBottom: "32px",
    [theme.breakpoints.down("sm")]: {
      border: "1px solid",
      borderColor: "lightGrey.main",
    },
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "0 16px",
    color: "blueGrey.main",
    alignItems: "center",
    marginBottom: "24px",
    [theme.breakpoints.down("sm")]: {
      padding: "24px 16px 0px 16px",
    },
  },
  summaryTitle: {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "24px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      lineHeight: "19.2px",
    },
  },
  totalAmount: {
    fontSize: "32px",
    lineHeight: "38.4px",
    fontWeight: "700",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "28.8px",
    },
  },
  summary: {
    padding: "24px 16px",
    backgroundColor: "lightGrey.main",
    borderRadius: "5px",
  },
  summaryLabel: {
    lineHeight: "16.8px",
    fontSize: "12px",
    strong: {
      fontFamily: "Inter",
      fontWeight: "700",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
});
