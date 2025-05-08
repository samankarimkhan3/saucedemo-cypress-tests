import LoginPage from '../pages/loginPage';

Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPage();
  loginPage.visit();
  loginPage.enterUsername(username);
  loginPage.enterPassword(password);
  loginPage.clickLogin();
});
