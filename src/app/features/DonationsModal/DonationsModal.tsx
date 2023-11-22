import { Stack, Dialog } from "@mui/material";
import { DonationsModalHeader } from "./components/DonationsModalHeader";
import { DonationsModalContent } from "./components/DonationsModalContent";

export const DonationsModal = () => {
  return (
    <Dialog open={true}>
      <Stack>
        <DonationsModalHeader />
        <DonationsModalContent />
      </Stack>
    </Dialog>
  );
};
