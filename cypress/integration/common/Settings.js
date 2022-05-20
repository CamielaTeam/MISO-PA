const selLinkSettings = 'a[href="#/settings/"]';
const selLinkGeneralSettings = 'a[href="#/settings/general/"]';
const selInputs = ".ember-text-field.gh-input.ember-view";
const selButtonSave = "button.gh-btn.gh-btn-primary.gh-btn-icon.ember-view";
const selExpandButton = ".gh-expandable-header>button";
const selLinkFacebook = ".gh-social-facebook";
const selLinkTwitter = ".gh-social-twitter";
const selSiteTitleDescInput = ".form-group.ember-view:first-child > input";
const selCanvas = ".gh-canvas";

export function clickSettings() {
  cy.get(selLinkSettings).click();
}

export function clickGeneralSettings() {
  cy.get(selLinkGeneralSettings).click();
}

export function clickExpandButton() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[0].click();
    cy.wait(1000);
  });
}

export function clickExpandSocialButton() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[6].click();
    cy.wait(1000);
  });
}

export function clearTitle() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).clear();
    cy.wait(1000);
  });
}

export function setSiteTitle(title) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).type(title, { force: true });
    cy.wait(1000);
  });
}

export function clearDescription() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).clear();
    cy.wait(1000);
  });
}

export function setSiteDescription(description) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).type(description, { force: true });
    cy.wait(1000);
  });
}

export function saveSettings() {
  cy.get(selButtonSave).click();
  cy.wait(1000);
}

export function clearFacebookUrl() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).clear();
    cy.wait(1000);
  });
}

export function clearTwitterUrl() {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).clear();
    cy.wait(1000);
  });
}

export function setFacebookUrl(facebookUrl) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[0]).type(facebookUrl, { force: true });
    cy.wait(1000);
  });
}

export function setTwitterUrl(twitterUrl) {
  cy.get(selInputs).then(($inputs) => {
    cy.get($inputs[1]).type(twitterUrl, { force: true });
    cy.wait(1000);
  });
}

export function getFacebookLink() {
  return cy.get(selLinkFacebook);
}

export function getTwitterLink() {
  return cy.get(selLinkTwitter);
}

export function clickExpandSiteTitleButton() {
  cy.get(selExpandButton).then(($expand) => {
    $expand[0].click();
    cy.wait(1000);
  });
}

export function getSiteTitleInput() {
  return cy.get(selSiteTitleDescInput);
}

export function clearSiteTitle() {
  cy.get(selSiteTitleDescInput).clear();
}

export function scrollToTop() {
  cy.get(selCanvas).scrollTo("top");
}
