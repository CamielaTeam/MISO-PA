import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import {
  setEmail,
  clickLogin,
  setPassword,
  newVersionBackToPosts,
  getPostList,
  clickNewPost,
  setPostTitle,
  clearPostTitle,
  newVersionPublishPostNow,
  newVersionUpdatePostNow,
  clickFirstPost,
  firstPostInList,
  newVersionClickDeletePost,
  newVersionOpenPostSettings,
  getPostListItems,
  filterByStatusDraft,
  publishPostScheduled,
  filterByStatusAllPosts,
  newVersionFilterByStatusPublished,
  filterByStatusScheduled,
} from "../common/PageObjectIndex";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin_new"));
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

Given("I go to the new post page", () => {
  clickNewPost();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-open-post-editor`
  );
});

When("I create a new post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-edit-post-title`
  );
});

When("I publish the new post", () => {
  newVersionPublishPostNow();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-publish-post`
  );
});

When("I return to the posts list", () => {
  cy.wait(3000);
  newVersionBackToPosts();
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-return-to-posts-list`
  );
  cy.wait(3000);
});

When("I filter posts by status Published", (status) => {
  newVersionFilterByStatusPublished();
  cy.wait(1000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-filter-by-status-published`
  );
});

When("I filter posts by status Draft", (status) => {
  filterByStatusDraft();
  cy.wait(1000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-filter-by-status-draft`
  );
});

When("I filter posts by status Scheduled", (status) => {
  filterByStatusScheduled();
  cy.wait(1000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-filter-by-status-scheduled`
  );
});

When("I schedule the new post", (title) => {
  publishPostScheduled();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-schedule-new-post`
  );
});

When("I click in the first post in the list", () => {
  clickFirstPost();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-click-post-detail`
  );
});

When("I open the post settings", () => {
  newVersionOpenPostSettings();
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-open-post-settings`
  );
});

When("I delete the post", () => {
  newVersionClickDeletePost();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-delete-post`
  );
});

Then(
  "I see that the first post in the list has title {string} and status {string}",
  (title, status) => {
    const post = firstPostInList();
    post.should("contain.text", title);
    post.should("contain.text", status);
    cy.screenshot(
      `${Cypress.currentTest.title
        .toLowerCase()
        .replaceAll(" ", "-")}/${+Date.now()}-reading-post-list-exists`
    );
  }
);

Then(
  "I see that there is no post with the title {string} in the post list",
  (title) => {
    const postList = getPostList();
    postList.should("not.contain.text", title);
    cy.screenshot(
      `${Cypress.currentTest.title
        .toLowerCase()
        .replaceAll(" ", "-")}/${+Date.now()}-reading-post-list-nonexistent`
    );
  }
);

After({ tags: "@clear" }, function () {
  filterByStatusAllPosts();
  cy.wait(2000);
  const postList = getPostListItems();
  if (postList) {
    postList.each(() => {
      clickFirstPost();
      cy.wait(2000);
      newVersionOpenPostSettings();
      newVersionClickDeletePost();
      cy.wait(2000);
    });
  }
});

When("I clear the post title", (title) => {
  clearPostTitle();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-clear-post-title`
  );
});

When("I edit the post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-edit-post-title`
  );
});

When("I update the new post", () => {
  newVersionUpdatePostNow();
  cy.wait(2000);
  cy.screenshot(
    `${Cypress.currentTest.title
      .toLowerCase()
      .replaceAll(" ", "-")}/${+Date.now()}-update-post`
  );
});
