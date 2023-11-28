import React from "react";
import { MonthInput } from "./MonthInput";
import moment from "moment";

describe("<AmountInput />", () => {
  const testLabel = "Test Label";
  const initialValue = moment();
  const onChange = () => {};

  beforeEach(() => {
    cy.mount(
      <MonthInput label={testLabel} value={initialValue} onChange={onChange} />,
    );
  });

  it("renders with default values", () => {
    cy.contains(testLabel);

    cy.contains(initialValue.format("MMMM"));
    cy.contains(initialValue.format("YYYY"));
  });

  it("returns proper month for next month click", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");

    cy.mount(
      <MonthInput
        label={testLabel}
        value={initialValue}
        onChange={onChangeSpy}
      />,
    );

    cy.get('[data-cy="month-input-set-next-month"]').click();

    cy.get("@onChangeSpy").should(
      "have.been.calledWith",
      initialValue.clone().add(1, "month"),
    );
  });

  it("returns proper month for prev month click", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");

    cy.mount(
      <MonthInput
        label={testLabel}
        value={initialValue}
        onChange={onChangeSpy}
      />,
    );

    cy.get('[data-cy="month-input-set-previous-month"]').click();

    cy.get("@onChangeSpy").should(
      "have.been.calledWith",
      initialValue.clone().subtract(1, "month"),
    );
  });
});
