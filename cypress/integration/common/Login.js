const selInputEmail = "input.email";
const selButtonLogin = "button.login";
const selInputPassword = "input.password";

export function setEmail(email) {
  cy.get(selInputEmail).type(email);
}

export function setPassword(password) {
  cy.get(selInputPassword).type(password);
}

export function clickLogin() {
  cy.get(selButtonLogin).click();
}
