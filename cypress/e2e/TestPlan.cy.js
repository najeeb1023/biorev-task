import { LoginPage } from "./pages/loginPage.ts"

describe('Authentication', () => {

  let loginUser = new LoginPage()
  
  it('User is able to login with correct credentials.', () => {
    loginUser.visitPage();
    loginUser.validCredentials();
    loginUser.assertUserLoggedIn();
  });

  it('User is NOT able to login with incorrect password.', () => {
    loginUser.visitPage();
    loginUser.invalidCredentialsPass();
    loginUser.assertUserNotLoggedIn();
  });

  it('User is NOT able to login with incorrect username.', () => {
    loginUser.visitPage();
    loginUser.invalidCredentialsUser();
    loginUser.assertUserNotLoggedIn();
  });
});