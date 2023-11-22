import { Stack, Typography, useTheme } from "@mui/material";
import { donationsModalStyles } from "./DonationsModalHeader.styles";
import { GivingBlockSvg } from "../../../../assets/icons";
import { useTranslation } from "react-i18next";

export const DonationsModalHeader = () => {
  const { t } = useTranslation();

  const theme = useTheme();
  const styles = donationsModalStyles(theme);

  return (
    <Stack sx={styles.container}>
      <GivingBlockSvg />
      <Stack sx={styles.titleContainer}>
        <Typography sx={styles.title}>{t("donationsModal.title")}</Typography>
        <Typography sx={styles.subtitle}>
          {t("donationsModal.subtitle")}
        </Typography>
      </Stack>
    </Stack>
  );
};
