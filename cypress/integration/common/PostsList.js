const selAllOption = '[data-option-index="0"]';
const selDraftOption = '[data-option-index="1"]';
const selPublishedOption = '[data-option-index="2"]';
const selScheduledOption = '[data-option-index="3"]';

const selFilterByStatus = ".gh-contentfilter-type > .ember-view";
const selListPostItem = "li.gh-list-row.gh-posts-list-item";
const selOlPostList = "ol.posts-list.gh-list";

export function firstPostInList() {
  return cy.get(selListPostItem).first();
}

export function filterByStatusPublished() {
  cy.get(selFilterByStatus).click();
  cy.get(selPublishedOption).click();
}

export function filterByStatusDraft() {
  cy.get(selFilterByStatus).click();
  cy.get(selDraftOption).click();
}

export function filterByStatusScheduled() {
  cy.get(selFilterByStatus).click();
  cy.get(selScheduledOption).click();
}

export function filterByStatusAllPosts() {
  cy.get(selFilterByStatus).click();
  cy.get(selAllOption).click();
}

export function clickFirstPost() {
  cy.get(selListPostItem).first().click();
}

export function getPostList() {
  return cy.get(selOlPostList);
}

export function getPostListItems() {
  return cy.get("body").then((body) => {
    if (body.find(selListPostItem).length > 0) {
      return cy.get(`${selOlPostList}>${selListPostItem}`);
    } else {
      return null;
    }
  });
}
