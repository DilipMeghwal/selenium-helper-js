const HomePage = require('../pages/homePage')
const AccountServicesPage = require('../pages/accountServicesPage')

class PageManager {
    constructor(driver) {
        this.homePage = new HomePage(driver)
        this.accountServicesPage = new AccountServicesPage(driver)
    }
    getHomePage() {
        return this.homePage
    }
    getAccountServicesPage() {
        return this.accountServicesPage
    }
}

module.exports = PageManager