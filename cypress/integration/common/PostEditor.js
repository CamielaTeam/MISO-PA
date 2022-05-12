const selButtonBack = "a.gh-editor-back-button";
const selDivPublish = "div.gh-publishmenu";
const selTextAreaTitle = "textarea.gh-editor-title";
const selButtonPublish = "button.gh-publishmenu-button";
const selSpanSettingsMenu = ".settings-menu-toggle > span";
const selButtonPublishConfirmation =
  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const selRadioButtonSchedule = ":nth-child(2) > .gh-publishmenu-radio-button";
const selButtonSchedule =
  "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view";
const selButtonScheduleConfirmation =
  "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view";
const selButtonPostSettings = "button.settings-menu-toggle";
const selButtonDeletePost = "button.settings-menu-delete-button";
const selButtonConfirmDeletePost =
  "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view";
const selDivTagInput = "#tag-input";
const selInputTag = "#tag-input";
const selFirstTagOption = 'li[data-option-index="0"]';

export function setPostTitle(title) {
  cy.get(selTextAreaTitle).type(title);
}

export function publishPostNow() {
  cy.get(selSpanSettingsMenu).click();
  cy.get(selDivPublish).click();
  cy.get(selButtonPublish).click();
  cy.get(selButtonPublishConfirmation).click();
}

export function backToPosts() {
  cy.get(selButtonBack).click();
}

export function publishPostScheduled() {
  cy.get(selSpanSettingsMenu).click();
  cy.get(selDivPublish).click();
  cy.get(selRadioButtonSchedule).click();
  cy.get(selButtonSchedule).click();
  cy.get(selButtonScheduleConfirmation).click();
}

export function openPostSettings() {
  cy.get(selButtonPostSettings).click();
}

export function clickDeletePost() {
  cy.get(selButtonDeletePost).click();
  cy.get(selButtonConfirmDeletePost).click();
}

export function clearPostTitle() {
  cy.get(selTextAreaTitle).clear();
}

export function updatePostNow() {
  cy.get(selDivPublish).click();
  cy.get(selButtonPublish).click();
  cy.get(selButtonPublishConfirmation).click();
}

export function clickPostTagsInput() {
  cy.get(selDivTagInput).click();
}

export function setPostTagName(name) {
  cy.get(selInputTag).type(name);
}

export function getFirstTagOption() {
  cy.get(selFirstTagOption).click();
}
