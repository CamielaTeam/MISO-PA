const selNewMember = "a.ember-view.gh-btn.gh-btn-primary";

export function clickNewMemberButton() {
  cy.get(selNewMember).contains("New member").click();
}
