import * as pageObj from "./PageObjectIndex";

export const elementDict = {
  login_email: pageObj.getEmailInput,
  login_password: pageObj.getPasswordInput,
  login_button: pageObj.getLoginButton,
  tag_title: pageObj.getTagTitleInput,
  tag_description: pageObj.getTagDescriptionInput,
  tag_accent: pageObj.getTagAccentColorInput,
  member_name: pageObj.getMemberNameInput,
  save_member: pageObj.getSaveMemberButton,
  member_email: pageObj.getMemberEmailInput,
  member_note: pageObj.getMemberNoteInput,
  member_labels: pageObj.getMemberLabelInput,
};
