const selLinkNewPost = "a.gh-nav-new-post";
const selLinkTags = "a.ember-view";
const selLinkPosts = "a.ember-view";
const selLinkPages = "a.ember-view";
const selHeadingSiteTitle = ".site-title";
const selParagraphSiteDescription = ".site-header-content>p";
const selDivMenuSiteTitle = ".gh-nav-menu-details-sitetitle";

export function clickNewPost() {
  cy.get(selLinkNewPost).click();
}

export function clickTags() {
  cy.get(selLinkTags).contains("Tags").click();
}

export function clickPosts() {
  cy.get(selLinkPosts).contains("Posts").click();
}

export function clickViewSite() {
  cy.get(selLinkPosts).contains("View site").click();
  cy.wait(2000);
}

export function getSiteTitle() {
  return cy.get(selHeadingSiteTitle);
}

export function getNavSiteTitle() {
  return cy.get(selDivMenuSiteTitle);
}

export function getSiteDescription() {
  return cy.get(selParagraphSiteDescription);
}

export function clickNewPage() {
  cy.get(selLinkPages).contains("New page").click();
}

export function clickPages() {
  cy.get(selLinkPages).contains("Pages").click();
}

export function clickMembers() {
  cy.get(selLinkPages).contains("Members").click();
}
