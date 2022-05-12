const selTextAreaTitle = "textarea.gh-editor-title";
const selSpanSettingsMenu = ".settings-menu-toggle > span";
const selDivPublish = "div.gh-publishmenu";
const selButtonPublish = "button.gh-publishmenu-button";
const selButtonPublishConfirmation =
  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const selButtonBack = "a.gh-editor-back-button";

export function setPageTitle(title) {
  cy.get(selTextAreaTitle).type(title);
}

export function publishPageNow() {
  cy.get(selSpanSettingsMenu).click();
  cy.get(selDivPublish).click();
  cy.get(selButtonPublish).click();
  cy.get(selButtonPublishConfirmation).click();
}

export function backToPages() {
  cy.get(selButtonBack).click();
}
