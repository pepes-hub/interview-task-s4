import React from "react";
import { DonationsModal } from "./DonationsModal";

describe("<DonationsModal />", () => {
  it("renders", () => {
    cy.mountWithMuiTheme(<DonationsModal />);
  });
});
