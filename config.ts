import {Config} from "protractor";

export let config: Config = {
    directConnect:true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    capabilities:{
        browserName:'chrome'
    },
  
    // require feature files
    specs: [
      '../Test/features/*.feature' // accepts a glob
    ],
  
    cucumberOpts: {
      // require step definitions
      require: [
        'path/to/step/definitions/**/*.steps.js' // accepts a glob
      ]
    }
  };