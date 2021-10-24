const { Capabilities, Builder, until, seleniumWebdriver } = require('selenium-webdriver');
const { setWorldConstructor, setDefaultTimeout, World } = require('@cucumber/cucumber');
const { timeout, baseURL } = require('../config');
require("chromedriver");

class CustomWorld extends World {
  // driver setup
  driver = new Builder().forBrowser('chrome').build();
  constructor(options) {
    super(options)
    // // driver setup
    // const capabilities = Capabilities.chrome();
    // capabilities.set('chromeOptions', { "w3c": false });
    // this.driver = new Builder().withCapabilities(capabilities).build();
  }

  async getElement(locator) {
    const element = await this.driver.wait(until.elementLocated(locator), timeout, `Timed out after ${timeout} ms`, 3000)
    return element;
  }

  async visitHomePage() {
    this.driver.get(baseURL)
  }

  async getElements(locator) {
    const elements = await this.driver.wait(until.elementsLocated(locator), timeout, `Timed out after ${timeout} ms`, 5000)
    return elements
  }

  async scrollElementIntoView(locator) {
    const element = await this.driver.wait(until.elementLocated(locator), timeout, `Timed out after ${timeout} ms`, 3000)
    await this.driver.executeScript('arguments[0].scrollIntoView()', element)
  }

  async getMonthNumber(monthString){
    let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return months.indexOf(monthString)
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld)