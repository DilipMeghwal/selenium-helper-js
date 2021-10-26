const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const assert = chai.assert
const expect = chai.expect
chai.should();

Given('user is on parabank home page', function (done) {
    pageManager.then(pm => {
        pm.getHomePage().openHomePage().then(flag => {
            expect(Promise.resolve(flag, "Home Page opened successfully")).to.eventually.equal(true).notify(done)
        })
    })
});
When('user enter username as {string}', function (username, done) {
    pageManager.then(pm => {
        pm.getHomePage().enterUsername(username).then(text => {
            expect(Promise.resolve(text, "Home Page opened successfully")).to.eventually.equal("true").notify(done)
        })
    })
});

When('user enter password as {string}', function (password) {
    pageManager.then(pm => pm.getHomePage().enterPassword(password))

});

When('user click on log in', function () {
    pageManager.then(pm => pm.getHomePage().clickOnLoginButton())
});

Then('verify user is able to login in successfully', function () {
    pageManager.then(pm => pm.getAccountServicesPage().verifyUserLoggedIn())
});