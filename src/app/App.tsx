import { RootContainer } from "./shared/ui/RootContainer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "./theme/muiTheme";
import { DonationsModal } from "./features/DonationsModal";
import "./libraries/i18n/I18n";

export const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline>
        <RootContainer>
          <DonationsModal />
        </RootContainer>
      </CssBaseline>
    </ThemeProvider>
  );
};
