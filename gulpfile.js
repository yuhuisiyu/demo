var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify'),
    concat = require('gulp-concat');
var connect = require('gulp-connect');

//copy index to assets
gulp.task('copy', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('assets'))
});

//console log Jenny
gulp.task('log', function() {
    gutil.log('Jenny')
});

//put main.css into assets
gulp.task('sass', function() {
    gulp.src('styles/main.scss')
        .pipe(sass({style: 'expanded'}))
        .on('error', gutil.log)
        .pipe(gulp.dest('assets'))
});

//
gulp.task('coffee', function() {
gulp.src('scripts/hello.coffee')
    .pipe(coffee({bare: true})
        .on('error', gutil.log))
    .pipe(gulp.dest('scripts'))
});

//minify all the js files
gulp.task('js', function() {
    gulp.src('scripts/*.js')
        .pipe(uglify())
        .pipe(concat('script.js'))
        .pipe(gulp.dest('assets'))
});

//combine of two tasks
//gulp.task('default', ['coffee', 'js']);

//gulp watch
gulp.task('watch', function() {
    gulp.watch('scripts/hello.coffee', ['coffee']);
    gulp.watch('scripts/*.js', ['js']);
    gulp.watch('styles/main.scss', ['sass']);
});

//server
gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('default', ['connect', 'watch']);