import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import {
  clickPages,
  clickNewPage,
  clickLogin,
  setEmail,
  setPassword,
  setPageTitle,
  publishPageNow,
  backToPages,
  firstPageInList,
  filterByStatusPublished,
  filterByStatusDraft,
  filterByStatusAllPosts,
  openPostSettings,
  clickDeletePost,
  getPageListItems,
  clickFirstPage,
  publishPostScheduled,
  getPageList,
  filterByStatusScheduled,
} from "../common/PageObjectIndex";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-open-ghost-admin`
  );
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-after-login`
  );
});

Given("I go to the new page page", () => {
  clickPages();
  cy.wait(2000);
  clickNewPage();
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-open-page-editor`
  );
});

When("I create a new page with title {string}", (title) => {
  setPageTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-edit-page-title`
  );
});

When("I publish the new page", () => {
  publishPageNow();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-publish-page`
  );
});

When("I return to the pages list", () => {
  backToPages();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-return-to-pages-list`
  );
});

When("I filter pages by status Published", () => {
  filterByStatusPublished();
  cy.wait(1000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-filter-by-status-published`
  );
});

When("I filter pages by status Draft", () => {
  filterByStatusDraft();
  cy.wait(1000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-filter-by-status-draft`
  );
});

When("I filter pages by status Scheduled", () => {
  filterByStatusScheduled();
  cy.wait(1000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-filter-by-status-scheduled`
  );
});

When("I schedule the new page", (title) => {
  publishPostScheduled();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-schedule-new-page`
  );
});

When("I click in the first page in the list", () => {
  clickFirstPage();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-click-page-detail`
  );
});

When("I open the page settings", () => {
  openPostSettings();
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-open-page-settings`
  );
});

When("I delete the page", () => {
  clickDeletePost();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-delete-page`
  );
});

Then(
  "I see that the first page in the list has title {string} and status {string}",
  (title, status) => {
    const post = firstPageInList();
    post.should("contain.text", title);
    post.should("contain.text", status);
    cy.screenshot(
      `${Cypress.currentTest.title
        .toLowerCase()
        .replaceAll(" ", "-")}/${+Date.now()}-reading-page-list-exists`
    );
  }
);

Then(
  "I see that there is no page with the title {string} in the page list",
  (title) => {
    const pageList = getPageList();
    pageList.should("not.contain.text", title);
    cy.screenshot(
      `${Cypress.currentTest.title
        .toLowerCase()
        .replaceAll(" ", "-")}/${+Date.now()}-reading-page-list-nonexistent`
    );
  }
);

After({ tags: "@clear" }, function () {
  filterByStatusAllPosts();
  cy.wait(2000);
  const pageList = getPageListItems();
  if (pageList) {
    pageList.each(() => {
      clickFirstPage();
      cy.wait(2000);
      openPostSettings();
      clickDeletePost();
      cy.wait(2000);
    });
  }
});
