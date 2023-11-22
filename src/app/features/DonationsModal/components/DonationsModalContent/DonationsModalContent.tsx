import { Box, Button, Stack, useTheme } from "@mui/material";
import { donationsModalContentStyles } from "./DonationsModalContent.styles";
import { useTranslation } from "react-i18next";

export const DonationsModalContent = () => {
  const theme = useTheme();
  const styles = donationsModalContentStyles(theme);

  const { t } = useTranslation();

  return (
    <Box sx={styles.container}>
      <Stack sx={styles.buttonsContainer}>
        <Button variant={"contained"} sx={styles.button} color={"secondary"}>
          {t("actions.cancel")}
        </Button>
        <Button variant={"contained"} sx={styles.button} color={"primary"}>
          {t("actions.continue")}
        </Button>
      </Stack>
    </Box>
  );
};
