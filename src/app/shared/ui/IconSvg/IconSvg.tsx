import {
  ChevronLeft,
  ChevronRight,
  Dollar,
  GivingBlock,
} from "../../../assets/icons";
import { Box } from "@mui/material";

const iconMap = {
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  dollar: Dollar,
  givingBlock: GivingBlock,
};

export type IconSvgType = keyof typeof iconMap;

interface IconSvgProps {
  name: IconSvgType;
}

export const IconSvg = ({ name }: IconSvgProps) => {
  const Icon = iconMap[name];

  return (
    <Box
      sx={{
        width: "24px",
        height: "24px",
        path: {
          fill: "rgba(77, 100, 117, 1)",
        },
      }}
    >
      <Icon />
    </Box>
  );
};
