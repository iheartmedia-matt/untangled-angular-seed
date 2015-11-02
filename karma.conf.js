module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        plugins: [
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        files: [
            'bower_components/lodash/lodash.js',
            'bower_components/angular/angular.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-route/angular-route.js',
            'scripts/app/appModule/app.module.js',
            'scripts/app/appModule/*.js',
            'scripts/app/**/*.module.js',
            'scripts/app/**/*.js',
            'scripts/testing/*.js',
            'scripts/app/**/*.html',
            'scripts/app/**/*.spec.js'
        ],

        exclude: [],

        preprocessors: {
            'scripts/app/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            // create a single module that contains templates from all the files
            moduleName: 'partials'
        }
    })
};