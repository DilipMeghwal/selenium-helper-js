const { until } = require('selenium-webdriver');
const { timeout } = require('../config');


class Utils {
    constructor(driver){
        this.driver = driver
    }
    async getElement(locator) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout, `Timed out after ${timeout} ms`, 3000)
        return element;
    }

    async getElements(locator) {
        const elements = await this.driver.wait(until.elementsLocated(locator), timeout, `Timed out after ${timeout} ms`, 5000)
        return elements
    }

    async scrollElementIntoView(locator) {
        const element = await this.driver.wait(until.elementLocated(locator), timeout, `Timed out after ${timeout} ms`, 3000)
        await this.driver.executeScript('arguments[0].scrollIntoView()', element)
    }

    async getMonthNumber(monthString) {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return months.indexOf(monthString)
    }

    async checkElementExist(locator) {
        const elements = await this.driver.wait(until.elementsLocated(locator), timeout, `Timed out after ${timeout} ms`, 5000)
        if(elements.length > 0){
            return true
        }else{
            false;
        }
    }
}

module.exports = Utils