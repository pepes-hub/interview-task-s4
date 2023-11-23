export const monthInputStyles = {
  input: {
    width: "100%",
    height: "60px",
    border: "1px solid rgba(233, 238, 242, 1)",
    borderRadius: "4px",
    padding: " 0 12px",
    flexDirection: "row",
    alignItems: "center",
  },
  labelsBlock: {
    width: "100%",
  },
  monthLabel: {
    fontFamily: "Rubik",
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "20px",
    textAlign: "center",
    color: "rgba(89, 93, 123, 1)",
  },
  yearLabel: {
    fontSize: "12px",
    lineHeight: "16px",
    textAlign: "center",
    color: "rgba(89, 93, 123, 1)",
  },
  button: {
    width: "24px",
    minWidth: "24px",
    height: "24px",
    borderRadius: "5px",
    cursor: "pointer",
    padding: "0",
    "&:hover": {
      backgroundColor: "rgba(243, 245, 254, 1)",
    },
    "&:active": {
      backgroundColor: "rgba(232, 234, 242, 1)",
    },
  },
};
