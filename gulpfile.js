var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');
var lib = require('bower-files')();
var using = require('gulp-using');
var del = require('del');
var argv = require('yargs').argv;

gulp.task('clean:dist', function () {
    return del([
        'dist/*.min.js'
    ]);
});

/**
 * Create lib.min.js by concatenating all the bower files from your libraries
 */
gulp.task('buildBowerFiles', function () {
    gulp.src(lib.ext('js').files)
        .pipe(using())
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});


/**
 * Build the app by concatenating all the app's modules, starting with the main app's module declaration, and then
 * all the subcomponents. The tests are excluded, but sourcemaps are included.
 */
gulp.task('buildAppFiles', function () {
    gulp.src([
        'scripts/app/appModule/*.module.js',
        'scripts/app/appModule/*.js',
        '!scripts/app/appModule/*.spec.js',
        'scripts/app/**/module.js',
        'scripts/app/**/*.js',
        '!scripts/app/**/*.spec.js'
    ])
        .pipe(using())
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

/**
 * Same as buildAppFiles, but without the sourcemaps
 */
gulp.task('deploy', function () {
    gulp.src([
        'scripts/app/appModule/*.module.js',
        'scripts/app/appModule/*.js',
        '!scripts/app/appModule/*.spec.js',
        'scripts/app/**/module.js',
        'scripts/app/**/*.js',
        '!scripts/app/**/*.spec.js'
    ])
        .pipe(using())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./dist/'));
});

/**
 * Rebuild when any change occurs
 */
gulp.task('watch', ['buildAppFiles'], function () {
    gulp.watch('scripts/app/**/*.js', ['buildAppFiles']);
    gulp.watch('scripts/app/*.js', ['buildAppFiles']);
    gulp.watch('scripts/app/**/**/*.*.html', ['buildAppFiles']);
});

/**
 * Main task to build the app (app.min.js) and its libraries (lib.min.js)
 */
gulp.task('build', ['clean:dist', 'buildBowerFiles', 'buildAppFiles']);

/**
 * Main task to start the server once everything's been built
 */
gulp.task('serve', ['watch'], function() {
    var port = argv.port || 8080;

    connect.server({
        port: port,
        fallback: 'index.html'
    });
});