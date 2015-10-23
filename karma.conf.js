module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],
        files: [
            'dist/lib.min.js',
            'scripts/app/app.module.js',
            'scripts/app/*.js',
            'scripts/app/**/*.module.js',
            'scripts/app/**/*.js',
            'scripts/app/**/*.spec.js',
            'scripts/app/**/*.html'
        ],

        exclude: [],

        preprocessors: {
            'scripts/app/**/*.html': ['ng-html2js'],
            'scripts/app/**/!(*.mock|*.spec).js': ['coverage']
        },

        ngHtml2JsPreprocessor: {
            // create a single module that contains templates from all the files
            moduleName: 'partials'
        }
    })
};