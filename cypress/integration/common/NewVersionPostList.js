const selFilterByStatus =
  ".gh-contentfilter-type > .ember-view > .ember-power-select-selected-item";
const selPublishedOption = '[data-option-index="2"]';

export function newVersionFilterByStatusPublished() {
  cy.get(selFilterByStatus).click();
  cy.get(selPublishedOption).click();
  cy.wait(3000);
}
