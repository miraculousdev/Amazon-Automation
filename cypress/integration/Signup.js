import {Signup} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the landing page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("I Should be able to click on signin button", function () {
        cy.get(Signup.signinBtn).click()
        cy.get(Signup.createyouramazonacct).click()
        cy.get(Signup.firstandlastnameField).type(Signup.firstandlastnameText)
        cy.get(Signup.phonenumberoremailField).type(Signup.phonenumberoremailText)
        cy.get(Signup.passwordField).type(Signup.passwordText)
        cy.get(Signup.reenterpasswordField).type(Signup.reenterpasswordText)
        cy.get(Signup.continueBtn).click()
        cy.get(Signup.solvepuzzleBtn).click()



      
    })
 
 
})
