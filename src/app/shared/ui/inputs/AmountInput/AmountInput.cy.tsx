import React from "react";
import { AmountInput } from "./AmountInput";

describe("<AmountInput />", () => {
  const testLabel = "Test label";
  const initialValue = 1234.45;
  const onChange = () => {};

  it("renders with default values", () => {
    cy.mount(
      <AmountInput
        label={testLabel}
        value={initialValue}
        onChange={onChange}
      />,
    );

    cy.contains(testLabel);
    cy.get("[data-cy='amount-input']")
      .find("input")
      .should("have.value", "1,234.45");
  });

  it("formats values", () => {
    cy.mount(
      <AmountInput label={testLabel} value={11223344.55} onChange={onChange} />,
    );

    cy.get("[data-cy='amount-input']")
      .find("input")
      .should("have.value", "11,223,344.55");

    cy.mount(<AmountInput label={testLabel} value={0} onChange={onChange} />);

    cy.get("[data-cy='amount-input']")
      .find("input")
      .should("have.value", "0.00");
  });

  it("returns proper numeric value", () => {
    const onChangeSpy = cy.spy().as("onChangeSpy");

    cy.mount(
      <AmountInput
        label={testLabel}
        value={initialValue}
        onChange={onChangeSpy}
      />,
    );

    cy.get("[data-cy='amount-input']").find("input").clear().type("1234");

    cy.get("@onChangeSpy").should("have.been.calledWith", 1234);

    cy.get("[data-cy='amount-input']").find("input").clear().type("123.40");

    cy.get("@onChangeSpy").should("have.been.calledWith", 123.4);

    cy.get("[data-cy='amount-input']").find("input").clear().type("1234.56");

    cy.get("@onChangeSpy").should("have.been.calledWith", 1234.56);

    cy.get("[data-cy='amount-input']").find("input").clear().type("1234.567");

    cy.get("@onChangeSpy").should("have.been.calledWith", 1234.56);
  });
});
