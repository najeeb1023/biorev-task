import { PageElement } from '../resources/interfaces/iPageElement';
import loginPageLocators from '../resources/loginPageLocators.json'

    function getResource(resourceName: string) {
        return loginPageLocators.webElements.find((element: PageElement) => element.elementName === resourceName) as PageElement; 
    }; // This function returns us the locators into our LoginPage to be used.

export class LoginPage {
    

    landingPageLocators = {
        usernameField:() => cy.get(getResource('usernameField').selectorValue),
        passwordField:() => cy.get(getResource('passwordField').selectorValue),
        loginBtn:() => cy.get(getResource('loginBtn').selectorValue),
        welcomeHeader:() => cy.get(getResource('welcomeHeader').selectorValue)
    };

    public async visitPage():Promise<void> {
        cy.visit('https://the-internet.herokuapp.com/login');
    }; // Simple function to visit webpage.

    public async validCredentials():Promise<void> {
        this.landingPageLocators.usernameField().type('tomsmith');
        this.landingPageLocators.passwordField().type('SuperSecretPassword!');
        this.landingPageLocators.loginBtn().click();
    }; // To login with valid credentials.

    public async invalidCredentialsPass():Promise<void> {
        this.landingPageLocators.usernameField().type('tomsmith');
        this.landingPageLocators.passwordField().type('SuperWrongPass!');
        this.landingPageLocators.loginBtn().click();
    }; // To login with invalid Password.

    public async invalidCredentialsUser():Promise<void> {
        this.landingPageLocators.usernameField().type('wrongPass');
        this.landingPageLocators.passwordField().type('SuperSecretPassword!');
        this.landingPageLocators.loginBtn().click();
    }; // To login with invalid Username.

    public async assertUserLoggedIn():Promise<void> {
        this.landingPageLocators.welcomeHeader().should('contain.text','Welcome to the Secure Area')
    }; // Assertion for successful login.

    public async assertUserNotLoggedIn():Promise<void> {
        this.landingPageLocators.welcomeHeader().should('contain.text','This is where you can log into the secure area.')
    }; // Assertion for unsuccessful login.

};