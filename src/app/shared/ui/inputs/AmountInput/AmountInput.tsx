import { TextField, InputAdornment } from "@mui/material";
import { ChangeEvent } from "react";
import { NumericFormatCustom } from "./components/NumericFormacWrapper";
import { InputField } from "../InputField";
import { IconSvg } from "../../IconSvg";

interface AmountInputProps {
  label: string;
  value: number | undefined;
  onChange: (value: number) => void;
}

export const AmountInput = ({ label, value, onChange }: AmountInputProps) => {
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    onChange(Number(value));
  };

  return (
    <InputField label={label}>
      <TextField
        value={value}
        onChange={handleOnChange}
        placeholder={"0.00"}
        InputProps={{
          inputComponent: NumericFormatCustom as any,
          startAdornment: (
            <InputAdornment position="start">
              <IconSvg name={"dollar"} />
            </InputAdornment>
          ),
        }}
      />
    </InputField>
  );
};
