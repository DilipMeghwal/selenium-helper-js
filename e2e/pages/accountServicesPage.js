const { By } = require('selenium-webdriver');

const logOut_btn = By.xpath('//div[@id="leftPanel"]//li/a[contains(text(), "Log Out")]')

module.exports = {
    logOut_btn
}