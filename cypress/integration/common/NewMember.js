const name = "#member-name";
const email = "#member-email";
const note = "#member-note";
const labels = "input.ember-power-select-trigger-multiple-input";
const saveMemberButton = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";

export function getMemberNameInput() {
  return cy.get(name);
}

export function getMemberEmailInput() {
  return cy.get(email);
}

export function getMemberNoteInput() {
  return cy.get(note);
}

export function getMemberLabelInput() {
  return cy.get(labels);
}

export function getSaveMemberButton() {
  return cy.get(saveMemberButton);
}
