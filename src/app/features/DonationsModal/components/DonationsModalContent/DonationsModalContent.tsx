import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { donationsModalContentStyles } from "./DonationsModalContent.styles";
import { Trans, useTranslation } from "react-i18next";
import moment from "moment";
import { SHORT_DATE_FORMAT } from "../../../../constants/date";
import { amountFormat } from "../../../../shared/helpers/amountFormat";

export const DonationsModalContent = () => {
  const theme = useTheme();
  const styles = donationsModalContentStyles(theme);

  const { t } = useTranslation();

  const totalAmount = 200000;
  const date = moment().format(SHORT_DATE_FORMAT);

  const formattedTotalAmount = amountFormat(totalAmount);

  return (
    <Box sx={styles.container}>
      <Stack sx={styles.summaryBlock}>
        <Stack sx={styles.summaryRow}>
          <Typography sx={styles.summaryTitle}>
            {t("donationsModal.summaryTitle")}
          </Typography>
          <Typography sx={styles.totalAmount}>
            {formattedTotalAmount}
          </Typography>
        </Stack>
        <Box sx={styles.summary}>
          <Typography sx={styles.summaryLabel}>
            <Trans
              i18nKey="donationsModal.summary"
              values={{
                amount: formattedTotalAmount,
                date,
              }}
            />
          </Typography>
        </Box>
      </Stack>
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
