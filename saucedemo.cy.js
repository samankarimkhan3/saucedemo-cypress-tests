/// <reference types="cypress"/>

import LoginPage from '../pages/loginPage';
import HomePage from '../pages/homePage';
import ProductPage from '../pages/productPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const productPage = new ProductPage();

describe('SauceDemo Tests', () => {

  it('Should show error message on wrong login', () => {
    loginPage.visit();
    loginPage.enterUsername('wrong_user');
    loginPage.enterPassword('wrong_pass');
    loginPage.clickLogin();
    loginPage.getErrorMessage().should('contain', 'Username and password do not match');
  });

  it('Should login successfully and land on home page', () => {
    cy.login('standard_user', 'secret_sauce');
    homePage.verifyOnhomepage();
  });

  it('Should navigate to product page after clicking a product', () => {
    cy.login('standard_user', 'secret_sauce');
    homePage.clickFirstProduct();
    productPage.verifyOnproductpage();
  });

});
