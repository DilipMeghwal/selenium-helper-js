const { By } = require('selenium-webdriver');
const cookies_accept_btn = By.xpath('//button[@id="popin_tc_privacy_button_3"]')
const popup_close_btn = By.xpath('//button[@title="Close"]')
const you_are_dropdown_btn = By.css('form[data-drupal-selector^="diagnostic-form1"] > div[data-drupal-selector="edit-niveau"] > div[class="current-choice"] > div.placeholder > div.place-text')
const you_are_option_list = By.css('div[data-drupal-selector="edit-niveau"] > div[class="current-choice open"] > ul >li > div > label')
const status_dropdown_btn = By.css('form[data-drupal-selector^="diagnostic-form1"] > div[data-drupal-selector="edit-niveau"] > div[class=" current-choice"] > div.placeholder > div.place-text')
const status_option_list = By.css('div[data-drupal-selector="edit-niveau"] > div[class="current-choice open"] > ul >li > div > label')
const solution_dropdown_btn = By.css('form[data-drupal-selector^="diagnostic-form1"] > div[data-drupal-selector="edit-niveau"] > div[class=" current-choice"] > div.placeholder > div.place-text')
const solution_option_list = By.css('div[data-drupal-selector="edit-niveau"] > div[class="current-choice open"] > ul >li > div > label')
const search_btn = By.xpath('//div[contains(@class, "button-find enabled")]//input[@data-drupal-selector="edit-submit"]')
const search_result_btn = (buttonToBeClicked) => By.xpath(`//div[@id="no-fill-button"]//a[contains(text(), "${buttonToBeClicked}")]`)
const health_foresight_switch_btn = By.xpath('//ul[contains(@id, "switch-tab")]//div')

module.exports = {
    cookies_accept_btn, popup_close_btn,
    you_are_dropdown_btn, you_are_option_list, status_dropdown_btn,
    status_option_list, solution_dropdown_btn, solution_option_list,
    search_btn, search_result_btn, health_foresight_switch_btn
}