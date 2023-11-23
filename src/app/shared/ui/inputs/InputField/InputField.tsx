import { ReactNode } from "react";
import { Stack, Typography } from "@mui/material";

interface InputFieldProps {
  label: string;
  children: ReactNode;
}

export const InputField = ({ label, children }: InputFieldProps) => {
  return (
    <Stack
      sx={{
        gap: "6px",
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontWeight: "500",
          color: "midnightPurple.main",
          fontSize: "14px",
          lineHeight: "18px",
        }}
      >
        {label}
      </Typography>
      {children}
    </Stack>
  );
};
