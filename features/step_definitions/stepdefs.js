const { Given, When, And, Then } = require('@cucumber/cucumber');
const {By, until } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { timeout } = require('../../config');

Given('user is on home page', async function () {
  await this.driver.get('https://www.malakoffhumanis.com/', timeout);
});

When(/^user select who you are (.*)$/, async function (YouAre) {
  await this.driver.manage().setTimeouts({ implicit: 60000 });
  await this.driver.wait(until.elementLocated(By.xpath('//button[@id="popin_tc_privacy_button_3"]'))).click()
  await this.driver.wait(until.elementLocated(By.xpath('//button[@title="Close"]'))).click()
  setTimeout(function () { console.log("wait 5 sec"); }, 5000);
  await this.driver.wait(until.elementLocated(By.xpath('//div[@id="fixed-content"]//div[contains(@id, "edit-niveau")]//div[@class="current-choice"]//div[@class="place-text"]'))).click()
  setTimeout(function () { console.log("wait 2 sec"); }, 2000);
  await this.driver.wait(until.elementLocated(By.xpath(`//div[contains(@id, "edit-niveau")]//div[@class="current-choice open"]//ul//li//label[contains(text(), "${YouAre}")]`))).click()
});

When(/^user select for who (.*)$/, async function (ForWho) {
  await this.driver.wait(until.elementLocated(By.xpath('//div[@id="fixed-content"]//div[contains(@id, "edit-niveau")]//div[@class=" current-choice"]//div[@class="place-text"]'))).click()
  await this.driver.wait(until.elementLocated(By.xpath(`//div[contains(@id, "edit-niveau")]//ul//li//label[contains(text(), "${ForWho}")]`))).click()
});

When(/^user select the solution (.*)$/, async function (WhichSolution) {
  await this.driver.wait(until.elementLocated(By.xpath('//div[@id="fixed-content"]//div[contains(@id, "edit-niveau")]//div[@class=" current-choice"]//div[@class="place-text"]'))).click()
  await this.driver.wait(until.elementLocated(By.xpath(`//div[contains(@id, "edit-niveau")]//ul//li//label[contains(text(), "${WhichSolution}")]`))).click()
});

When(/^user click on search button$/, async function () {
  await this.driver.wait(until.elementLocated(By.xpath('//div[contains(@class, "button-find enabled")]//input[@data-drupal-selector="edit-submit"]'))).click()
})

Then(/^user click on button (.*)$/, async function (buttonToBeClicked) {
  await this.driver.wait(until.elementLocated(By.xpath(`//div[@id="no-fill-button"]//a[contains(text(), "${buttonToBeClicked}")]`))).click()
});

Then(/^verify results$/, async function () {
  const tabElements = await this.driver.wait(until.elementLocated(By.xpath('//ul[contains(@id, "switch-tab")]')))
  if (tabElements != null) {
    assert.isOk('everything', 'everything is ok');
  } else {
    assert.fail("Element is Absent");
  }
})