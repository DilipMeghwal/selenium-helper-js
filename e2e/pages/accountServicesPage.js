const { By } = require('selenium-webdriver');
const { timeout, baseURL } = require('../config');
const Utils = require('../support/utils.js')
const { expect, assert, should } = require('chai');

const logOut_btn = By.xpath('//div[@id="leftPanel"]//li/a[contains(text(), "Log Out")]')

class AccountServicesPage {
    constructor(driver) {
        this.driver = driver;
        this.utils = new Utils(driver)
    }
    verifyUserLoggedIn(){
        this.utils.getElements(logOut_btn).then(element => {
            console.log(`logout length : ${element.length}`)
            element.length.should.be.eq(1)
            assert.isNotOk()
        })
    }
}

module.exports = AccountServicesPage