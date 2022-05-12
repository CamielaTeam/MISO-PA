const selDivPublish = "div.gh-publishmenu";
const selButtonPublish = "button.gh-publishmenu-button";
const selButtonBack = "a.blue.link.fw4.flex.items-center.ember-view";
const selButtonPostSettings = "button.post-settings";
const selButtonDeletePost = "button.settings-menu-delete-button";
const selButtonConfirmDeletePost =
  "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view";

export function newVersionPublishPostNow() {
  cy.get(selDivPublish).click();
  cy.get(selButtonPublish).click();
}

export function newVersionBackToPosts() {
  cy.get(selButtonBack).click();
}

export function newVersionOpenPostSettings() {
  cy.get(selButtonPostSettings).click();
}

export function newVersionClickDeletePost() {
  cy.get(selButtonDeletePost).click();
  cy.wait(3000);
  cy.get(selButtonConfirmDeletePost).click();
}

export function newVersionUpdatePostNow() {
  cy.get(selDivPublish).click();
  cy.get(selButtonPublish).click();
}
