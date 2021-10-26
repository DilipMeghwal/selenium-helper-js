const { Capabilities, Builder, until, seleniumWebdriver } = require('selenium-webdriver');
const { setWorldConstructor, setDefaultTimeout, World } = require('@cucumber/cucumber');
const { timeout } = require('../config');
const PageManager = require('../support/pageManager')
const Utils = require('./utils')

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

  async getPageManager(){
    return new PageManager(this.driver)
  }

  async getUtils(){
    return new Utils(this.driver)
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld)