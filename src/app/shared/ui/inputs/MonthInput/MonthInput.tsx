import { InputField } from "../InputField";
import { Button, Stack, Typography } from "@mui/material";
import moment, { Moment } from "moment";
import { monthInputStyles } from "./MonthInput.styles";
import { IconSvg } from "../../IconSvg";

interface MonthInputProps {
  label: string;
  value: Moment;
  onChange: (value: Moment) => void;
  blockPast?: boolean;
  blockFuture?: boolean;
}

export const MonthInput = ({
  label,
  value,
  onChange,
  blockPast,
  blockFuture,
}: MonthInputProps) => {
  const month = value.format("MMMM");
  const year = value.format("YYYY");

  const handleSetPreviousMonth = () => {
    const previousMonth = value.clone().subtract(1, "month");

    onChange(previousMonth);
  };

  const handleSetNextMonth = () => {
    const nextMonth = value.clone().add(1, "month");

    onChange(nextMonth);
  };

  const blockPreviousMonth = blockPast && value.isSame(moment(), "month");
  const blockNextMonth = blockFuture && value.isSame(moment(), "month");

  return (
    <InputField label={label}>
      <Stack sx={monthInputStyles.input}>
        <Button
          sx={monthInputStyles.button}
          onClick={handleSetPreviousMonth}
          disabled={blockPreviousMonth}
        >
          <IconSvg name={"chevronLeft"} />
        </Button>
        <Stack sx={monthInputStyles.labelsBlock}>
          <Typography sx={monthInputStyles.monthLabel}>{month}</Typography>
          <Typography sx={monthInputStyles.yearLabel}>{year}</Typography>
        </Stack>
        <Button
          sx={monthInputStyles.button}
          onClick={handleSetNextMonth}
          disabled={blockNextMonth}
        >
          <IconSvg name={"chevronRight"} />
        </Button>
      </Stack>
    </InputField>
  );
};
