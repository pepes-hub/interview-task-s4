import { Stack, Typography, useTheme } from "@mui/material";
import { donationsModalStyles } from "./DonationsModalHeader.styles";
import { GivingBlock } from "../../../../assets/icons";
import { useTranslation } from "react-i18next";

export const DonationsModalHeader = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const styles = donationsModalStyles(theme);

  return (
    <Stack sx={styles.container}>
      <GivingBlock />
      <Stack sx={styles.titleContainer}>
        <Typography sx={styles.title}>{t("donationsModal.title")}</Typography>
        <Typography sx={styles.subtitle}>
          {t("donationsModal.subtitle")}
        </Typography>
      </Stack>
    </Stack>
  );
};
