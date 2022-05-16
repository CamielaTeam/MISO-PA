const selInputEmail = "input.email";
const selButtonLogin = "button.login";
const selInputPassword = "input.password";

export function getEmailInput() {
  return cy.get(selInputEmail);
}

export function getPasswordInput() {
  return cy.get(selInputPassword);
}

export function getLoginButton() {
  return cy.get(selButtonLogin);
}

export function setEmail(email) {
  cy.get(selInputEmail).type(email);
}

export function setPassword(password) {
  cy.get(selInputPassword).type(password);
}

export function clickLogin() {
  cy.get(selButtonLogin).click();
}
