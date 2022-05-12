const selInputName = "#tag-name";
const selTextAreaDesc = "#tag-description";
const selButtonSave = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selButtonDeleteTag = "button.gh-btn.gh-btn-red.gh-btn-icon";
const selButtonConfirmDeleteTag =
  ".modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon";

export function setTagName(name) {
  cy.get(selInputName).type(name);
}

export function setTagDescription(description) {
  cy.get(selTextAreaDesc).type(description);
}

export function saveTag() {
  cy.get(selButtonSave).click();
}

export function clickDeleteTag() {
  cy.get(selButtonDeleteTag).contains("Delete tag").click();
  cy.wait(2000);
  cy.get(selButtonConfirmDeleteTag).click();
}

export function clearTagName() {
  cy.get(selInputName).clear();
}

export function clearTagDescription() {
  cy.get(selTextAreaDesc).clear();
}
