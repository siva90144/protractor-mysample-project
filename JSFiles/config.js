"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    // require feature files
    specs: [
        '/**/*.feature' // accepts a glob
    ],
    cucumberOpts: {
        // require step definitions
        require: [
            'path/to/step/definitions/**/*.steps.js' // accepts a glob
        ]
    }
};
//# sourceMappingURL=config.js.map