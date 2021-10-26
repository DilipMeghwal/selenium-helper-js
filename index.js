
var reporter = require('cucumber-html-reporter');

var options = {
        theme: 'bootstrap',
        jsonFile: 'output/reports/cucumber_report.json',
        output: 'output/reports/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: false,
        brandTitle: "e2e tests",
        storeScreenshots: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "Testing",
            "Browser": "Version 95.0.4638.54 ",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Local"
        }
    };

    reporter.generate(options);
    

    //more info on `metadata` is available in `options` section below.

    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.

