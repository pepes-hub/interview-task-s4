import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "./theme/muiTheme";
import { RootContainer } from "./shared/ui/RootContainer";
import { ReactNode } from "react";
import "./libraries/i18n/I18n";
import "./index.css";

export const createApp = (children: ReactNode) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline>
        <RootContainer>{children}</RootContainer>
      </CssBaseline>
    </ThemeProvider>
  );
};
