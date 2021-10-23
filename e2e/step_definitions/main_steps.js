const { Given, When, And, Then } = require('@cucumber/cucumber');
const { By, until } = require('selenium-webdriver');
const { expect, assert } = require('chai');
const { timeout } = require('../config');
const { cookies_accept_btn, popup_close_btn,
    you_are_dropdown_btn, you_are_option_list, status_dropdown_btn,
    status_option_list, solution_dropdown_btn, solution_option_list,
    search_btn, search_result_btn, health_foresight_switch_btn } = require("../pages/homePage")

Given('user is on home page', async function () {
    await this.driver.get('https://www.malakoffhumanis.com/')
    await this.driver.wait(until.elementLocated(By.xpath('//button[@id="popin_tc_privacy_button_3"]')), timeout, `Timed out after ${timeout} ms`, 2000).click()
    await this.driver.wait(until.elementLocated(By.xpath('//button[@title="Close"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
});

When(/^user select who you are (.*)$/, async function (YouAre) {
    // await this.getElement(you_are_dropdown_btn).then(async el => { await el.click()})
    // await this.getElements(you_are_option_list).then(async function (options) {
    //     for (let i = 0; i < options.length; i++) {
    //         await options[i].getText().then(async text => {
    //             if (text.includes(YouAre)) {
    //                 await options[i].click()
    //                 return;
    //             }
    //         })
    //     }
    // })

    await this.driver.wait(until.elementLocated(By.css('form[data-drupal-selector^="diagnostic-form1"] > div[data-drupal-selector="edit-niveau"] > div[class^="current-choice"] > div.placeholder > div.place-text')), timeout, `Timed out after ${timeout} ms`, 5000).click()
    //await this.driver.executeScript('arguments[0].scrollIntoView()', element)
    const options = await this.driver.wait(until.elementsLocated(By.css('div[data-drupal-selector="edit-niveau"] > div[class^="current-choice open"] > ul >li > div > label')), timeout, `Timed out after ${timeout} ms`, 2000)
    for (let ele of options) {
        let option = await ele.getText()
        console.log(`option : ${option}`)
        if (option.includes(YouAre)) {
            await ele.click()
            return;
        }
    }
});

When(/^user select for who (.*)$/, async function (ForWho) {
    // await this.getElement(status_dropdown_btn).then(async el => { await el.click() })
    // await this.getElements(status_option_list).then(async function (options) {
    //     for (let i = 0; i < options.length; i++) {
    //         await options[i].getText().then(async text => {
    //             if (text.includes(ForWho)) {
    //                 await options[i].click()
    //                 return;
    //             }
    //         })
    //     }
    // })
    const dd2 = await this.driver.wait(until.elementLocated(By.css('form[data-drupal-selector^="diagnostic-form1"] > div[data-drupal-selector="edit-niveau"] > div[class^=" current-choice"] > div.placeholder > div.place-text')), timeout, `Timed out after ${timeout} ms`, 2000).click()
    await this.driver.executeScript('arguments[0].scrollIntoView()', dd2)
    dd2.click()
    const options = await this.driver.wait(until.elementsLocated(By.css('div[data-drupal-selector="edit-niveau"] > div[class^="current-choice open"] > ul >li > div > label')), timeout, `Timed out after ${timeout} ms`, 2000)
    for (let ele of options) {
        let option = await ele.getText()
        if (option.includes(ForWho)) {
            await ele.click()
            return;
        }
    }
});

When(/^user select the solution (.*)$/, async function (WhichSolution) {
    // await this.getElement(solution_dropdown_btn).then(async el => { await el.click() })
    // await this.getElements(solution_option_list).then(async function (options) {
    //     for (let i = 0; i < options.length; i++) {
    //         await options[i].getText().then(async text => {
    //             if (text.includes(WhichSolution)) {
    //                 await options[i].click()
    //                 return;
    //             }
    //         })
    //     }
    // })

    await this.driver.wait(until.elementLocated(By.css('form[data-drupal-selector^="diagnostic-form1"] > div[data-drupal-selector="edit-niveau"] > div[class^=" current-choice"] > div.placeholder > div.place-text')), timeout, `Timed out after ${timeout} ms`, 2000).click()
    const options = await this.driver.wait(until.elementsLocated(By.css('div[data-drupal-selector="edit-niveau"] > div[class^="current-choice open"] > ul >li > div > label')), timeout, `Timed out after ${timeout} ms`, 2000)
    for (let ele of options) {
        let option = await ele.getText()
        if (option.includes(WhichSolution)) {
            await ele.click()
            return;
        }
    }
});

When(/^user click on search button on home page$/, async function () {
    
    await this.getElement(search_btn).then(async el => { 
        await this.driver.executeScript('arguments[0].scrollIntoView()', el)
        await el.click() })
})

Then(/^user click on button (.*)$/, async function (buttonToBeClicked) {
    await this.getElement(search_result_btn(buttonToBeClicked)).then(async el => { await el.click() })
});

Then(/^verify results$/, async function () {
    await this.getElement(health_foresight_switch_btn).then(async el => {
        if (await el != null) {
            assert.isOk('everything', 'everything is ok');
        } else {
            assert.fail("Element is Absent");
        }
    })
})

Then(/^verify url contains (.*) and (.*) switch is selected$/, async function (url, WhichSolution) {
    const currentUrl = await this.driver.getCurrentUrl()
    if (currentUrl.includes(url)) {
        assert.isOk('everything', 'everything is ok');
    } else {
        assert.fail(`Url doest contain ${url}`);
    }

    const selectedFlag = await this.driver.wait(until.elementLocated(By.xpath(`//ul[contains(@id, "switch-tab")]//a[@id="${WhichSolution}"]`)), timeout, `Timed out after ${timeout} ms`, 5000).getAttribute('aria-selected')
    if (selectedFlag.includes("true")) {
        assert.isOk('everything', 'everything is ok');
    } else {
        assert.fail("switch is selected");
    }
})

When(/^user click on the email message icon (.*)$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.css('a[id="contact-btn-sticky"][class*="tool-box-btc"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
})

Then(/^verify the number (.*) is the one displayed on the photo on the left$/, async function (number) {
    const telNo = await this.driver.wait(until.elementLocated(By.xpath('//div[@id="contacter-notre-service-commercial"]//div[starts-with(@class, "clearfix")]//a')), timeout, `Timed out after ${timeout} ms`, 5000).getAttribute('href')
    if (telNo.includes(number)) {
        assert.isOk('everything', 'everything is ok');
    } else {
        assert.fail("Phone no is incorrect");
    }
})

Then(/^click on (.*), I will check if I got the map$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.xpath('//div[@id="contacter-notre-service-commercial"]//div[contains(@id, "une-boutique-a-proximite")]//div[@class="field--field-advanced-title"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()

    await this.driver.wait(until.elementsLocated(By.xpath('//div[@class="store_locator"]//div[@id="ubsf_store-finder-map"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .then(elements => {
            if (elements.length > 0) {
                assert.isOk('everything', 'everything is ok');
            } else {
                assert.fail("Map not displayed");
            }
        });
})

When(/^click on (.*) button$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.xpath('//div[@id="contacter-notre-service-commercial"]//div[contains(@id, "envoyer-un-message")]//div[@class="field--field-advanced-title"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
});

When(/^enter membership number (.*)$/, async function (membership_number) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-subscribernumber"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(membership_number)
})

When(/^select the checkbox "(.*)$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.css('input[name="diagRequestChoice"] + label')), timeout, `Timed out after ${timeout} ms`, 5000).click()
})

When(/^enter request message "(.*)$/, async function (message) {
    await this.driver.wait(until.elementLocated(By.css('textarea[data-drupal-selector="edit-otherrequest"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(message)
})

When(/^enter name (.*)$/, async function (name) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-name"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(name)
})



When(/^enter first name (.*)$/, async function (firstname) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-firstname"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(firstname)
})

When(/^enter email (.*)$/, async function (email) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-email"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(email)
})

When(/^enter confirm email (.*)$/, async function (email) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-emailconfirm"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(email)
})

When(/^enter telephone (.*)$/, async function (telephone) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-phone"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(telephone)
})

When(/^enter pincode (.*)$/, async function (pincode) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-codepostal"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(pincode)
})

When(/^click on the button (.*) on screen$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-actions"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
})

When(/^verify the message (.*)$/, async function (message) {
    let verifyMessage = await this.driver.wait(until.elementLocated(By.css('div[class="form-alert"]')), timeout, `Timed out after ${timeout} ms`, 5000).getText()
    console.log(`final message : ${verifyMessage}`)
    if (verifyMessage.indexOf(message) > -1) {
        assert.isOk('everything', 'everything is ok');
    } else {
        assert.fail(`Expected message : ${message}, actual message : ${verifyMessage}`);
    }
})


Then(/^user click on (.*) and verify a form is opened$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.xpath('//div[@id="contacter-notre-service-commercial"]//div[contains(@id, "etre-rappele-par-un-conseiller")]//div[@class="field--field-advanced-title"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()

    await this.driver.wait(until.elementsLocated(By.css('fieldset[data-drupal-selector="edit-your-request"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .then(elements => {
            if (elements.length > 0) {
                assert.isOk('everything', 'everything is ok');
            } else {
                assert.fail("form is opened");
            }
        });
})

When(/^user choose (.*) from (.*)$/, async function(subject, string) {
    await this.driver.wait(until.elementLocated(By.css('div[id^="edit_call_object"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
    
    const options = await this.driver.wait(until.elementsLocated(By.css('div[id^="edit_call_object"] > div[class="chosen-drop"] > ul[class="chosen-results"] > li')), timeout, `Timed out after ${timeout} ms`, 2000)
    for (let ele of options) {
        let option = await ele.getText()
        if (option.includes(subject)) {
            await ele.click()
            return;
        }
    }
})

When(/^user click on (.*) switch$/, async function(switchOption) {
    const switchOptions = await this.driver.wait(until.elementsLocated(By.css('input[data-drupal-selector^="edit-rdv-type-input-switch"] + label')), timeout, `Timed out after ${timeout} ms`, 2000)
    let count = 1;
    for (let ele of switchOptions) {
        let option = await ele.getText()
        console.log(`option : ${option}, count = ${count}`)
        if (option.localeCompare(switchOption)) {
            await this.driver.wait(until.elementLocated(By.css(`#edit-rdv-type-input-switch--RbTcq5oZ8i4 > div:nth-child(${count})`)), timeout, `Timed out after ${timeout} ms`, 2000).click()
            return;
        }
        count++;
    }
})

When(/^user choose date as (.*)$/, async function(date) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-rdv-date"]')), timeout, `Timed out after ${timeout} ms`, 2000).click()
    //if date is passed as blank we are cosidering we need to select todays date
    let day, month, year
    if(date === ""){
        day = getDate()
        month = getMonth()
        year = getFullYear()
    }else{
        day = date.split(" ")[0]
        month = await this.getMonthNumber(date.split(" ")[1])
        year = date.split(" ")[2]
    }
    const dates = await this.driver.wait(until.elementsLocated(By.css(`table[class="ui-datepicker-calendar"] > tbody > tr > td[data-month="${month}"][data-year="${year}"][title="available"]`)), timeout, `Timed out after ${timeout} ms`, 2000)
    for (let d of dates) {
        let option = await d.getText()
        if (option.includes(day)) {
            await d.click()
            return;
        }
    }
})

When(/^user choose time as (.*)$/, async function(time) {
    await this.driver.wait(until.elementLocated(By.css('div[id^="edit_rdv_creneau"]')), timeout, `Timed out after ${timeout} ms`, 2000).click()
    //if date is passed as blank we are cosidering we need to select todays date
    if(time === ""){
        time = "Entre 11h et 12h"
    }
    const timeOptions = await this.driver.wait(until.elementsLocated(By.css('div[id^="edit_rdv_creneau"] > div[class="chosen-drop"] > ul[class="chosen-results"] > li')), timeout, `Timed out after ${timeout} ms`, 2000)
    for (let ele of timeOptions) {
        let option = await ele.getText()
        if (option.includes(time)) {
            await ele.click()
            return;
        }
    }
})

When('enter firstname as {string} on call back screen', async function (firstname) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-first-name"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .sendKeys(firstname)
})

When(/^click on the button (.*) on call back screen$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.css('input[data-drupal-selector="edit-submit"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
})


Then(/^user click on (.*) and verify a chat is opened$/, async function (string) {
    await this.driver.wait(until.elementLocated(By.xpath('//div[@id="contacter-notre-service-commercial"]//div[contains(@id, "discuter-immediatement-avec-un-conseiller-en-ligne")]//div[@class="field--field-advanced-title"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()

    await this.driver.wait(until.elementsLocated(By.css('div[aria-label="Live Chat Window"]')), timeout, `Timed out after ${timeout} ms`, 5000)
        .then(elements => {
            if (elements.length > 0) {
                assert.isOk('everything', 'everything is ok');
            } else {
                assert.fail("chat is not opened");
            }
        });
})

Then('user send message {string} on chat', async function (message) {
    await this.driver.wait(until.elementLocated(By.css('div.cx-textarea-cell > textarea')), timeout, `Timed out after ${timeout} ms`, 5000).sendKeys(message)
    await this.driver.wait(until.elementLocated(By.css('div.cx-textarea-cell > div[aria-label="Send"]')), timeout, `Timed out after ${timeout} ms`, 5000).click()
  })
