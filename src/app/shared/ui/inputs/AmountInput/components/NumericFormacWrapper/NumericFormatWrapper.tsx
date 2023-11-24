import {
  NumberFormatValues,
  NumericFormat,
  NumericFormatProps,
} from "react-number-format";
import { forwardRef } from "react";

interface CustomProps {
  onChange: (event: { target: { value: string } }) => void;
  name: string;
}

export const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    const handleOnValueChange = (values: NumberFormatValues) => {
      onChange({
        target: {
          value: values.value,
        },
      });
    };

    return (
      <NumericFormat
        {...other}
        allowNegative={false}
        decimalScale={2}
        getInputRef={ref}
        onValueChange={handleOnValueChange}
        thousandSeparator
        valueIsNumericString
        allowLeadingZeros
        fixedDecimalScale
      />
    );
  },
);
