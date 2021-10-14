const { Capabilities, Builder } = require('selenium-webdriver');
const { setWorldConstructor, setDefaultTimeout } = require('@cucumber/cucumber');
const { timeout } = require('../../config');
require("chromedriver");

class CustomWorld {
  constructor() {
    // driver setup
    const capabilities = Capabilities.chrome();
    capabilities.set('chromeOptions', { "w3c": false });
    this.driver = new Builder().withCapabilities(capabilities).build();
  }
}

setDefaultTimeout(timeout);
setWorldConstructor(CustomWorld);