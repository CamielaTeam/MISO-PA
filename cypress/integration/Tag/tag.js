import { Then, Given, When, After } from "cypress-cucumber-preprocessor/steps";

import {
  setEmail,
  setPassword,
  clickLogin,
  clickTags,
  clickPosts,
  clickNewTag,
  setTagName,
  setTagDescription,
  saveTag,
  lastTagInList,
  getTagListItems,
  getTagList,
  clickFirstTag,
  clickDeleteTag,
  clickLastTag,
  clearTagName,
  clearTagDescription,
  setPostTitle,
  publishPostNow,
  backToPosts,
  clickNewPost,
  clickFirstPost,
  openPostSettings,
  clickPostTagsInput,
  getFirstTagOption,
  setPostTagName,
  updatePostNow,
  firstPostInList,
  filterByStatusPublished,
  firstTagInList,
} from "../common/PageObjectIndex";

Given("I open Ghost admin page", () => {
  cy.visit(Cypress.env("url_admin"));
  cy.wait(2000);
});

Given("I login into the admin page", () => {
  setEmail(Cypress.env("admin_email"));
  setPassword(Cypress.env("admin_password"));
  clickLogin();
  cy.wait(2000);
});

Given("I go to the tags page", () => {
  clickTags();
  cy.wait(2000);
});

Given("I go to the posts page", () => {
  clickPosts();
  cy.wait(2000);
});

Given("I go to the new tag page", () => {
  clickNewTag();
  cy.wait(2000);
});

When(
  "I create a new tag with name {string} and description {string}",
  (name, description) => {
    setTagName(name);
    setTagDescription(description);
    saveTag();
    cy.wait(2000);
  }
);

When(
  "I edit the tag with name {string} and description {string}",
  (name, description) => {
    setTagName(name);
    setTagDescription(description);
    saveTag();
    cy.wait(2000);
  }
);

Then(
  "I see that the last tag in the list has name {string} and number of posts {string}",
  (name, status) => {
    const tag = lastTagInList();
    tag.should("contain.text", name);
    tag.should("contain.text", `${status} posts`);
    cy.wait(2000);
  }
);

Then("I see that there is a tag with name {string}", (name) => {
  const tagList = getTagList();
  tagList.should("contain.text", name);
  cy.wait(2000);
});

When("I click the last tag in the list", () => {
  clickLastTag();
  cy.wait(2000);
});

When("I clear the tag name", () => {
  clearTagName();
  cy.wait(2000);
});

When("I clear the tag description", () => {
  clearTagDescription();
  cy.wait(2000);
});

When("I delete the tag", () => {
  clickDeleteTag();
  cy.wait(2000);
});

After({ tags: "@clear" }, function () {
  const tagList = getTagListItems();
  if (tagList) {
    tagList.each(() => {
      clickFirstTag();
      cy.wait(2000);
      clickDeleteTag();
      cy.wait(2000);
    });
  }
});

Given(
  "I create a new tag with name {string} and description {string}",
  (name, description) => {
    setTagName(name);
    setTagDescription(description);
    saveTag();
    cy.wait(2000);
  }
);

Then(
  "I see that there is no tag with the name {string} in the tag list",
  (name) => {
    const firstTag = firstTagInList();

    if (!firstTag) {
      return true;
    }
    const tagList = getTagListItems();

    tagList.should("not.contain.text", name);
  }
);

When("I create a new post with title {string}", (title) => {
  setPostTitle(title);
  cy.get("body").trigger("keydown", { ctrlKey: true, keyCode: 83 });
  cy.wait(2000);
});

When("I publish the new post", () => {
  publishPostNow();
  cy.wait(2000);
});

When("I return to the posts list", () => {
  backToPosts();
  cy.wait(2000);
});

When("I go to the new post page", () => {
  clickNewPost();
  cy.wait(2000);
});

When("I click in the first post in the list", () => {
  clickFirstPost();
  cy.wait(2000);
});

When("I open the post settings", () => {
  openPostSettings();
});

When("I asign the tag {string} to the post", (name) => {
  clickPostTagsInput();
  setPostTagName(name);
  cy.wait(1000);
  getFirstTagOption();
  cy.wait(2000);
});

When("I update the new post", () => {
  updatePostNow();
  cy.wait(2000);
});

Then("I see that the first post in the list has tag {string}", (name) => {
  const post = firstPostInList();
  post.should("contain.text", name);
});

When("I filter posts by status Published", (status) => {
  filterByStatusPublished();
  cy.wait(1000);
});
