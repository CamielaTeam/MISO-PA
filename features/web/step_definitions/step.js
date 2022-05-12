const selectors = require("../common/PageObjectIndex");

const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const expect = require("chai").expect;

Given("I enter email {kraken-string}", async function (email) {
  let emailInput = await this.driver.$(selectors.selInputEmail);
  return await emailInput.setValue(email);
});

Given("I enter password {kraken-string}", async function (email) {
  let passwordInput = await this.driver.$(selectors.selInputPassword);
  return await passwordInput.setValue(email);
});

Given("I click on the login button", async function () {
  let loginButton = await this.driver.$(selectors.selButtonLogin);
  return await loginButton.click();
});

When("I click on the new post button", async function () {
  let newPostButton = this.driver.$(selectors.selLinkNewPost);
  return await newPostButton.click();
});

When("I write {kraken-string} in the post title", async function (title) {
  let titleInput = await this.driver.$(selectors.selTextAreaTitle);

  await titleInput.setValue(title);

  // Clicking outside the title text area
  const buttonBack = await this.driver.$(selectors.selButtonBack);
  return await buttonBack.click();
});

When("I publish the new post", async function () {
  const spanSettingsMenu = await this.driver.$(selectors.selSpanSettingsMenu);
  await spanSettingsMenu.click();
  const divPublish = await this.driver.$(selectors.selDivPublish);
  await divPublish.click();
  const buttonPublish = await this.driver.$(selectors.selButtonPublish);
  await buttonPublish.click();
  const buttonPublishConfirmation = await this.driver.$(
    selectors.selButtonPublishConfirmation
  );
  return await buttonPublishConfirmation.click();
});

When("I schedule the new post", async function () {
  const spanSettingsMenu = await this.driver.$(selectors.selSpanSettingsMenu);
  await spanSettingsMenu.click();
  const divPublish = await this.driver.$(selectors.selDivPublish);
  await divPublish.click();
  const radioButtonSchedule = await this.driver.$(
    selectors.selRadioButtonSchedule
  );
  await radioButtonSchedule.click();
  const scheduleButton = await this.driver.$(selectors.selButtonSchedule);
  await scheduleButton.click();
  const scheduleConfirmationButton = await this.driver.$(
    selectors.selButtonScheduleConfirmation
  );
  return await scheduleConfirmationButton.click();
});

When("I return to the posts list", async function () {
  const buttonBack = await this.driver.$(selectors.selButtonBack);
  return await buttonBack.click();
});

When("I filter posts by status Published", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const publishedOption = await this.driver.$(selectors.selPublishedOption);
  return await publishedOption.click();
});

When("I filter posts by status Draft", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const draftOption = await this.driver.$(selectors.selDraftOption);
  return await draftOption.click();
});

When("I filter posts by status Scheduled", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const scheduledOption = await this.driver.$(selectors.selScheduledOption);
  return await scheduledOption.click();
});

When("I click in the first post in the list", async function () {
  const firstPostItem = await this.driver.$(selectors.selListPostItem);
  return await firstPostItem.click();
});

When("I open the post settings", async function () {
  const settingsButton = await this.driver.$(selectors.selButtonPostSettings);
  return await settingsButton.click();
});

When("I delete the post", async function () {
  const buttonDeletePost = await this.driver.$(selectors.selButtonDeletePost);
  await buttonDeletePost.click();
  const buttonConfirmDeletePost = await this.driver.$(
    selectors.selButtonConfirmDeletePost
  );
  return await buttonConfirmDeletePost.click();
});

Then(
  "I see that the first post in the list has title {kraken-string}",
  async function (title) {
    const list = await this.driver.$$(selectors.selPostItemTitle);
    const postTitle = await list[0].getText();
    expect(postTitle).to.equal(title);
  }
);

Then(
  "I see that there is no post with the title {kraken-string} in the post list",
  async function (title) {
    const list = await this.driver.$$(selectors.selPostItemTitle);
    if (list[0]) {
      const postTitle = await list[0].getText();
      expect(postTitle).to.not.equal(title);
    }
  }
);

When("I publish the edited post", async function () {
  const divPublish = await this.driver.$(selectors.selDivUpdate);
  await divPublish.click();
  const buttonPublish = await this.driver.$(selectors.selButtonPublish);
  await buttonPublish.click();
});

When("I edit {kraken-string} in the post title", async function (title) {
  let titleInput = await this.driver.$(selectors.selTextAreaTitle);
  await titleInput.setValue(title);
});

Given("I click on tags option", async function () {
  let tagsButton = this.driver.$(selectors.selLinkTags);
  return await tagsButton.click();
});

When("I click on the new tags button", async function () {
  let newTagButton = this.driver.$(selectors.selLinkNewTag);
  return await newTagButton.click();
});

When("I write {kraken-string} in the tag name", async function (name) {
  let nameInput = await this.driver.$(selectors.selInputName);

  await nameInput.setValue(name);
});

When(
  "I write {kraken-string} in the tag description",
  async function (description) {
    let descriptionTextArea = await this.driver.$(selectors.selTextAreaDesc);
    await descriptionTextArea.setValue(description);
  }
);

When("I save the new tag", async function () {
  let saveTagButton = this.driver.$(selectors.selButtonSave);
  return await saveTagButton.click();
});

When("I click the last tag in the list", async function () {
  const list = await this.driver.$$(selectors.selTagItemTitle);
  const lastTag = await list[list.length - 1];
  return await lastTag.click();
});

Then(
  "I see that the last tag in the list has name {kraken-string}",
  async function (name) {
    const list = await this.driver.$$(selectors.selTagItemTitle);
    const lastTag = await list[list.length - 1].getText();
    expect(lastTag).to.equal(name);
  }
);

Then(
  "I see that there is a tag in the list with name {kraken-string}",
  async function (name) {
    const list = await this.driver.$$(selectors.selTagItemName);
    let expectedTag = "";
    for (let index = 0; index < list.length; index++) {
      const tagText = await list[index].getText();
      if (tagText === name) {
        expectedTag = tagText;
      }
    }
    expect(expectedTag).to.equal(name);
  }
);

When("I delete the tag", async function () {
  const buttonDeleteTag = await this.driver.$(selectors.selButtonDeleteTag);
  await buttonDeleteTag.click();
  const buttonConfirmDeleteTag = await this.driver.$(
    selectors.selButtonConfirmDeleteTag
  );
  return await buttonConfirmDeleteTag.click();
});

When("I click the delete tag button", async function () {
  const buttonDeleteTag = await this.driver.$(selectors.selButtonDeleteTag);
  return await buttonDeleteTag.click();
});

When("I click confirm tag deleting", async function () {
  const buttonConfirmDeleteTag = await this.driver.$(
    selectors.selButtonConfirmDeleteTag
  );
  return await buttonConfirmDeleteTag.click();
});

Then(
  "I see that there is no tag with the name {kraken-string} in the tag list",
  async function (name) {
    const list = await this.driver.$$(selectors.selListTagItem);
    const tagTitle = await list[0].getText();
    expect(tagTitle).to.not.equal(name);
  }
);

Given("I click on posts option", async function () {
  let postsButton = this.driver.$(selectors.selLinkPosts);
  return await postsButton.click();
});

When("I asign the tag {kraken-string} to the post", async function (name) {
  const tagsInput = await this.driver.$(selectors.selInputTag);
  await tagsInput.click();
  await tagsInput.setValue(name);
  const firstTagOption = await this.driver.$(selectors.selFirstTagOption);
  await firstTagOption.click();
});

Then(
  "I see that there is a post in the list with name {kraken-string}",
  async function (name) {
    const list = await this.driver.$$(selectors.selPostItemTag);
    const postTag = await list[1].getText();
    expect(postTag).to.equal(name);
  }
);

When("I click on the page button", async function () {
  const pageButton = await this.driver.$(selectors.selPageButton);
  return await pageButton.click();
});

When("I click on new page", async function () {
  const createPage = await this.driver.$(selectors.selCreatePage);
  return await createPage.click();
});

When("I write {kraken-string} in the page title", async function (title) {
  let titleInput = await this.driver.$(selectors.selTitlePage);

  await titleInput.setValue(title);

  const newPageOutsideArea = await this.driver.$(
    selectors.selNewPageOutsideArea
  );
  return await newPageOutsideArea.click();
});

When("I click on publish page dropdown", async function () {
  const publishDropdown = await this.driver.$(selectors.selPublishDropdown);
  return await publishDropdown.click();
});

When("I click on publish page button", async function () {
  const publishButton = await this.driver.$(selectors.selPublishButton);
  return await publishButton.click();
});

When("I click on go back to pages button", async function () {
  const pagesBackButton = await this.driver.$(selectors.selPagesBackButton);
  return await pagesBackButton.click();
});

When("I filter published pages", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const publishedOption = await this.driver.$(selectors.selPublishedOption);
  return await publishedOption.click();
});

When("I sort by newest pages", async function () {
  const sortDropdown = await this.driver.$(selectors.selSortDropdown);
  return await sortDropdown.click();
});

Then(
  "I see that the new page is named as {kraken-string}",
  async function (title) {
    const list = await this.driver.$$(selectors.selPagesList);
    const pageFirstItem = await list[0];
    const pageTitle = await pageFirstItem.$(selectors.selPageTitle).getText();
    expect(pageTitle).to.equal(title);
  }
);

Then(
  "I see that the new page is not named as {kraken-string}",
  async function (title) {
    const list = await this.driver.$$(selectors.selPagesList);
    const pageFirstItem = await list[0];
    const pageTitle = await pageFirstItem.$(selectors.selPageTitle).getText();

    expect(pageTitle).to.not.equal(title);
  }
);

When("I filter draft pages", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const draftOption = await this.driver.$(selectors.selDraftOption);
  return await draftOption.click();
});

Then("I see the page", async function () {
  const viewSite = await this.driver.$(selectors.selViewSiteButton);
  return await viewSite.click();
});

When("I click on page settings", async function () {
  const pageSettings = await this.driver.$(selectors.selSpanSettingsMenu);
  return await pageSettings.click();
});

When("I click on tag dropdown", async function () {
  const tagDropdown = await this.driver.$(selectors.selTagDropdown);
  return await tagDropdown.click();
});

When("I click on tag button", async function () {
  const tagButton = await this.driver.$(selectors.selTagDropdown);
  return await tagButton.click();
});

let tagName = "";
When("I click on first tag", async function () {
  const lista = await this.driver.$$(".ember-power-select-option");

  // click on first tag
  const firstTag = await lista[0];

  // get tag name and assign to variable
  tagName = await firstTag.getText();

  return await firstTag.click();
});

Then("I see that the new page has the tag", async function () {
  const list = await this.driver.$$(selectors.selPagesList);
  const pageFirstItem = await list[0];
  const pageTag = await pageFirstItem.$(selectors.selPageTag).getText();

  // Check if the page has the tag name
  expect(pageTag).to.include("News");
});

When("I click on the first published page", async function () {
  const list = await this.driver.$$(selectors.selPagesList);
  const pageFirstItem = await list[0];
  return await pageFirstItem.click();
});

When("I sort by recently updated pages", async function () {
  const sortDropdown = await this.driver.$(selectors.selSortDropdown);
  await sortDropdown.click();
  const sortRecentlyUpdated = await this.driver.$(
    selectors.selSortRecentlyUpdated
  );
  return await sortRecentlyUpdated.click();
});

When("I click on update page dropdown", async function () {
  const updateDropdown = await this.driver.$(selectors.selUpdateDropdown);
  return await updateDropdown.click();
});

When("I click on feature this page", async function () {
  const featureThisPage = await this.driver.$(selectors.selFeature);
  return await featureThisPage.click();
});

When("I filter featured pages", async function () {
  const filterByStatus = await this.driver.$(selectors.selFilterByStatus);
  await filterByStatus.click();
  const featureOption = await this.driver.$(selectors.selFeatureFilter);
  return await featureOption.click();
});

When("I unpublish the page", async function () {
  const unpublishPage = await this.driver.$(selectors.selUnpublishPage);
  return await unpublishPage.click();
});

When("I delete the page", async function () {
  const deletePage = await this.driver.$(selectors.selDeletePage);
  return await deletePage.click();
});

When("I confirm the delete", async function () {
  const confirmDelete = await this.driver.$(selectors.selDeleteConfirmation);
  return await confirmDelete.click();
});

When("I click on preview", async function () {
  const preview = await this.driver.$(selectors.selPreview);
  return await preview.click();
});

Then("I should see a preview of the page", async function () {
  // Check if element was found
  const preview = await this.driver.$(selectors.selPreviewContainer);
  expect(preview).to.exist;
});

When("I click on user profile", async function () {
  const userProfile = await this.driver.$(selectors.selUserProfile);
  return await userProfile.click();
});

Then("I should see the user email {kraken-string}", async function (email) {
  const userEmail = await this.driver.$(selectors.selUserEmail);
  const userEmailText = await userEmail.getText();
  expect(userEmailText).to.equal(email);
});

Then(
  "I should see the user username {kraken-string}",
  async function (user_name) {
    const username = await this.driver.$(selectors.selUsername);
    const usernameText = await username.getText();
    expect(usernameText).to.equal(user_name);
  }
);
