import * as pageObj from "./PageObjectIndex";

export const elementDict = {
  login_email: pageObj.getEmailInput,
  login_password: pageObj.getPasswordInput,
  login_button: pageObj.getLoginButton,
  tag_title: pageObj.getTagTitleInput,
  tag_description: pageObj.getTagDescriptionInput,
  tag_accent: pageObj.getTagAccentColorInput,
  canonical_url: pageObj.getTagSlugInput,
  tag_slug: pageObj.getTagSlugInput,
  tag_meta_title: pageObj.getTagMetaTitle,
  tag_meta_description: pageObj.getTagMetaDescr,
  tag_canonical_url: pageObj.getTagCanonicalUrl,
  site_title: pageObj.getSiteTitleInput,
  member_name: pageObj.getMemberNameInput,
  save_member: pageObj.getSaveMemberButton,
  member_email: pageObj.getMemberEmailInput,
  member_note: pageObj.getMemberNoteInput,
};
