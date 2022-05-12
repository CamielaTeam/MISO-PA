const selListPageItem = "li.gh-list-row.gh-posts-list-item";
const selListPageItems = "li.gh-list-row.gh-posts-list-item";
const selOlPageList = "ol.gh-list";

export function firstPageInList() {
  return cy.get(selListPageItem).first();
}

export function getPageListItems() {
  return cy.get("body").then((body) => {
    if (body.find(selListPageItems).length > 0) {
      return cy.get(`${selOlPageList}>${selListPageItems}`);
    } else {
      return null;
    }
  });
}

export function clickFirstPage() {
  cy.get(selListPageItem).first().click();
}

export function getPageList() {
  return cy.get(selOlPageList);
}
