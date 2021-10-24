const { Before, After, Status, AfterStep } = require('@cucumber/cucumber');

Before(function () {
  return this.driver.manage().window().maximize();
});

AfterStep(function () {
  var world = this;
  return this.driver.takeScreenshot().then(function (screenShot) {
    world.attach(screenShot, 'base64:image/png');
  });
});

After(function (testCase) {
  try {
    var world = this;
    if (testCase.result.status === Status.FAILED) {
      return this.driver.takeScreenshot().then(function (screenShot) {
        world.attach(screenShot, 'base64:image/png');
      });
    }
    return this.driver.quit();
  } catch (e) {
    console.log('Failed to close driver due: ' + e.message);
  }
});