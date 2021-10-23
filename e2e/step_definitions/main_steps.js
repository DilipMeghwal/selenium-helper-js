const { Given, When, And, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { timeout } = require('../config');
const homePage = require('../pages/homePage')
const accountServicesPage = require('../pages/accountServicesPage')


Given('user is on parabank home page', async function () {
    this.visitHomePage()
});

When('user enter username as {string}', async function (username) {
    this.getElement(homePage.username_txtbox).then(element => element.clear())
    this.getElement(homePage.username_txtbox).then(element => element.sendKeys(username))
});

When('user enter password as {string}', async function (password) {
    this.getElement(homePage.password_txtbox).then(element => element.clear())
    this.getElement(homePage.password_txtbox).then(element => element.sendKeys(password))
});

When('user click on log in', async function () {
    this.getElement(homePage.logIn_btn).then(element => element.click())
});

Then('verify user is able to login in successfully', async function () {
    this.getElements(accountServicesPage.logOut_btn).then(element => {
        expect(element.length, "logout button to be visisble").to.be.eq(1)
    })
});