import { mount } from "cypress/react18";
import { createApp } from "../../src/app/setup";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
      mountWithMuiTheme: typeof mount;
    }
  }
}

Cypress.Commands.add("mount", mount);

Cypress.Commands.add("mountWithMuiTheme", (children) => {
  cy.mount(createApp(children));
});
