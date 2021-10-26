const { By } = require('selenium-webdriver');
const { timeout, baseURL } = require('../config');
const Utils = require('../support/utils.js')

//elements
const username_txtbox = By.xpath('//input[@name="username"]')
const password_txtbox = By.xpath('//input[@name="password"]')
const logIn_btn = By.xpath('//input[@value="Log In"]')



class HomePage {
    constructor(driver) {
        this.driver = driver;
        this.utils = new Utils(driver)
    }

    async openHomePage() {
        this.driver.get(baseURL)
        return await this.utils.checkElementExist(username_txtbox)
    }

    enterUsername(username) {
        await this.utils.getElement(username_txtbox).clear()
        await this.utils.getElement(username_txtbox).sendKeys(username)
        return await this.utils.getElement(username_txtbox).getText()
    }
    enterPassword(password) {
        await this.utils.getElement(password_txtbox).clear()
        await this.utils.getElement(password_txtbox).sendKeys(password)
        return await this.utils.getElement(password_txtbox).getText()
    }
    clickOnLoginButton() {
        await this.utils.getElement(logIn_btn).click()
    }

}

module.exports = HomePage