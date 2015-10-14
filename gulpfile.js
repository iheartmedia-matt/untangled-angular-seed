var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');
var lib = require('bower-files')();
var using = require('gulp-using');
var del = require('del');

gulp.task('clean:dist', function () {
    return del([
        'dist/*.min.js'
    ]);
});

gulp.task('buildBowerFiles', function () {
    gulp.src(lib.ext('js').files)
        .pipe(using())
        .pipe(concat('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('buildAppFiles', function () {
    gulp.src([
        'scripts/app/*.module.js',
        'scripts/app/*.js',
        '!scripts/app/*.spec.js',
        'scripts/app/**/module.js',
        'scripts/app/**/*.js',
        '!scripts/app/**/*.spec.js'
    ])
        .pipe(using())
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['buildAppFiles'], function () {
    gulp.watch('scripts/app/**/*.js', ['buildAppFiles']);
    gulp.watch('scripts/app/*.js', ['buildAppFiles']);
    gulp.watch('scripts/app/**/**/*.*.html', ['buildAppFiles']);
});

gulp.task('build', ['buildBowerFiles', 'buildAppFiles']);

gulp.task('serve', ['watch'], function() {
    connect.server();
});