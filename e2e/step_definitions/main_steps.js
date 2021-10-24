const { Given, When, And, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { timeout } = require('../config');
const homePage = require('../pages/homePage')
const accountServicesPage = require('../pages/accountServicesPage')


Given('user is on parabank home page', function () {
    this.visitHomePage()
    this.getElements(homePage.username_txtbox).then(element => {
        console.log(`length : ${element.length}`)
        expect(element.length, "usrname textbox to be visible").to.be.eq(1)
    });
});
When('user enter username as {string}', function (username) {
    this.getElement(homePage.username_txtbox).then(element => element.clear())
    this.getElement(homePage.username_txtbox).then(element => element.sendKeys(username))
});

When('user enter password as {string}', function (password) {
    this.getElements(homePage.username_txtbox).then(element => {
        console.log(`username text : ${element.getText()}`)
        expect(element.getText(), "username should be entered").to.be.not("")
    });
    this.getElement(homePage.password_txtbox).then(element => element.clear())
    this.getElement(homePage.password_txtbox).then(element => element.sendKeys(password))
});

When('user click on log in', function () {
    this.getElements(homePage.password_txtbox).then(element => {
        console.log(`password text : ${element.getText()}`)
        expect(element.getText(), "password should be entered").to.be.not("")
    });
    this.getElement(homePage.logIn_btn).then(element => element.click())
});

Then('verify user is able to login in successfully', function () {
    this.getElements(accountServicesPage.logOut_btn).then(element => {
        console.log(`length : ${element.length}`)
        expect(element.length, "logout button to be visisble").to.be.eq(2)
    })
});