// wdio.conf.js

export const config = {

  runner: 'local', 
  specs: ['./test/specs/*.spec.js'], 
  maxInstances: 1,
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      // 'appium:platformVersion': '13.0',      
      'appium:automationName': 'UiAutomator2',
      'appium:app': './app/antenna-pod.apk',     
      'appium:autoGrantPermissions': true,
      'appium:appPackage': 'de.danoeh.antennapod.debug',
      'appium:appActivity': 'de.danoeh.antennapod.activity.SplashActivity',

    },
  ],

  logLevel: 'info', 
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000, 
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      'appium',
      {
        command: 'appium', 
      },
    ],
  ],
  framework: 'mocha',
  reporters: [
    'spec', 
    [
      'allure',
      {
        outputDir: 'reports/allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  afterTest: async function (test, context, { error }) {
    if (error) {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      await driver.saveScreenshot(`reports/screenshots/${test.title}_${timestamp}.png`);
    }
  },
};
