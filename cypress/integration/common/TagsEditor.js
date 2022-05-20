const selInputName = "#tag-name";
const selTextAreaDesc = "#tag-description";
const selButtonSave = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selButtonDeleteTag = "button.gh-btn.gh-btn-red.gh-btn-icon";
const selButtonConfirmDeleteTag =
  ".modal-footer > button.gh-btn.gh-btn-red.gh-btn-icon";

const selInputTagAccentColor = "input[name='accent-color'].gh-input";
const selInputSlug = "#tag-slug";
const selExpandButton = ".gh-btn.gh-btn-expand";
const selInputTagMetaTitle = "input[name='metaTitle'].gh-input";
const selInputTagMetaDescr = "textarea[name='metaDescription'].gh-input";
const selInputTagCanonicalUrl = "input[name='canonicalUrl'].gh-input";
const selInputTwitterMetaTitle = "input[name='twitterTitle'].gh-input";
const selInputTagFacebookTitle = "input[name='ogTitle'].gh-input";

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

export function getTagTitleInput() {
  return cy.get(selInputName);
}

export function getTagDescriptionInput() {
  return cy.get(selTextAreaDesc);
}

export function getTagAccentColorInput() {
  return cy.get(selInputTagAccentColor);
}

export function getTagSlugInput() {
  return cy.get(selInputSlug);
}

export function expandTagMetadata() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[0].click();
    cy.wait(1000);
  });
}

export function expandTagTwitter() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[1].click();
    cy.wait(1000);
  });
}

export function expandTagFacebook() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[2].click();
    cy.wait(1000);
  });
}

export function getTagMetaTitle() {
  return cy.get(selInputTagMetaTitle);
}

export function getTagMetaDescr() {
  return cy.get(selInputTagMetaDescr);
}

export function getTagCanonicalUrl() {
  return cy.get(selInputTagCanonicalUrl);
}

export function getTwitterMetaTitle() {
  return cy.get(selInputTwitterMetaTitle);
}

export function getTagFacebookTitle() {
  return cy.get(selInputTagFacebookTitle);
}
