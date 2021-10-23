const { By } = require('selenium-webdriver');
const username_txtbox = By.xpath('//input[@name="username"]')
const password_txtbox = By.xpath('//input[@name="password"]')
const logIn_btn = By.xpath('//input[@value="Log In"]')


module.exports = {
    username_txtbox, password_txtbox, logIn_btn
}