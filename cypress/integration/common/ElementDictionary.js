import * as pageObj from "./PageObjectIndex";

export const elementDict = {
  login_email: pageObj.getEmailInput,
  login_password: pageObj.getPasswordInput,
  login_button: pageObj.getLoginButton,
};
