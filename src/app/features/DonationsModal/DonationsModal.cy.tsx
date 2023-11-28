import React from "react";
import { DonationsModal } from "./DonationsModal";
import moment from "moment";
import { SHORT_DATE_FORMAT } from "../../constants/date";

describe("<DonationsModal />", () => {
  it("renders", () => {
    cy.mountWithMuiTheme(<DonationsModal />);
  });

  it("renders with initial values", () => {
    cy.mountWithMuiTheme(<DonationsModal />);

    cy.get("[data-cy='amount-input']").find("input").should("have.value", "");

    cy.get("[data-cy='month-input']").contains(moment().format("MMMM"));
    cy.get("[data-cy='month-input']").contains(moment().format("YYYY"));

    cy.get("[data-cy='summary-text']").contains("$0");
    cy.get("[data-cy='summary-text']").contains(
      moment().format(SHORT_DATE_FORMAT),
    );
  });

  it("renders with edited values", () => {
    cy.mountWithMuiTheme(<DonationsModal />);

    cy.get("[data-cy='amount-input']").find("input").type("1234.45");
    cy.get("[data-cy='month-input']")
      .get("[data-cy='month-input-set-next-month']")
      .click();

    cy.get("[data-cy='summary-text']").contains("$1,234.45");
    cy.get("[data-cy='summary-text']").contains(
      moment().add(1, "month").format(SHORT_DATE_FORMAT),
    );
  });
});
