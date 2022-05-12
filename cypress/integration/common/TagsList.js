const selListTagItem = "li.gh-list-row.gh-tags-list-item";
const selLinkNewTag = "a.ember-view.gh-btn.gh-btn-primary";
const selOlTagList = "ol.tags-list.gh-list";
const selHeadingTagName = ".gh-tag-list-name";

export function clickNewTag() {
  cy.get(selLinkNewTag).contains("New tag").click();
}

export function firstTagInList() {
  return cy.get(selListTagItem).first();
}

export function lastTagInList() {
  return cy.get(selListTagItem).last();
}

export function clickLastTag() {
  cy.get(selListTagItem).last().click();
}

export function getTagList() {
  return cy.get(selOlTagList);
}

export function getTagListItems() {
  return cy.get("body").then((body) => {
    if (body.find(selListTagItem).length > 0) {
      return cy.get(`${selOlTagList}>${selListTagItem}`);
    } else {
      return 0;
    }
  });
}

export function getTagNames() {
  cy.get(selHeadingTagName).then(($tagNames) => {
    return $tagNames;
  });
}

export function clickFirstTag() {
  cy.get(selListTagItem).first().click();
}
