import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import { donationsModalContentStyles } from "./DonationsModalContent.styles";
import { Trans, useTranslation } from "react-i18next";
import moment, { Moment } from "moment";
import { SHORT_DATE_FORMAT } from "../../../../constants/date";
import { amountFormat } from "../../../../shared/helpers/amountFormat";
import { AmountInput } from "../../../../shared/ui/inputs/AmountInput";
import { useState } from "react";
import { MonthInput } from "../../../../shared/ui/inputs/MonthInput";

export const DonationsModalContent = () => {
  const theme = useTheme();
  const styles = donationsModalContentStyles(theme);

  const { t } = useTranslation();

  const [value, setValue] = useState<number | undefined>(undefined);
  const [selectedDate, setSelectedDate] = useState<Moment>(moment());

  const shortDate = selectedDate.format(SHORT_DATE_FORMAT);
  const formattedTotalAmount = amountFormat(200000);
  const formattedAmount = amountFormat(value ?? 0);

  return (
    <Box sx={styles.container}>
      <Stack sx={styles.valuesBlock}>
        <AmountInput
          label={t("labels.iCanDonate")}
          value={value}
          onChange={setValue}
        />
        <MonthInput
          blockPast
          label={t("labels.donateUntil")}
          value={selectedDate}
          onChange={setSelectedDate}
        />
      </Stack>
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
                amount: formattedAmount,
                date: shortDate,
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
