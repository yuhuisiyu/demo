var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    open = require('gulp-open'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    babel = require('gulp-babel');
var
    //coffeeSources = ['scripts/hello.coffee'],
    jsSources = ['src/view/**/*.js'
         ,'src/config.js','src/controller.js'],
    sassSources = ['src/styles/style.css'],
    htmlSources = ['src/view/**/*.html','index.html'],
    outputDir = 'assets';


// gulp.task('log', function() {
//     gutil.log('== My First Task ==')
// });

// gulp.task('copy', function() {
//     gulp.src('index.html')
//         .pipe(gulp.dest(outputDir))
// });

gulp.task('sass', function() {
    gulp.src(sassSources)
    //     .pipe(sass({style: 'expanded'}))
    //     .on('error', gutil.log)
    //     .pipe(gulp.dest('assets'))
        .pipe(connect.reload())
});

// gulp.task('coffee', function() {
//     gulp.src(coffeeSources)
//         .pipe(coffee({bare: true})
//             .on('error', gutil.log))
//         .pipe(gulp.dest('scripts'))
// });

gulp.task('js', function() {
        gulp.src(jsSources)
        // .pipe(babel())
        // .pipe(concat('script.js'))
        // // .pipe(uglify())
        // .pipe(gulp.dest(outputDir))
        .pipe(connect.reload())
});

gulp.task('babel', function () {
         return browserify(jsSources)
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('outputDir'));
});

gulp.task('watch', function() {
//    gulp.watch(coffeeSources, ['coffee']);
    gulp.watch(jsSources, ['js']);
    gulp.watch(sassSources, ['sass']);
    gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
    connect.server({
        root: '.',
        livereload: true
    })
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

// gulp.task('open', function(){
//     var options = {
//         url: "http://localhost:8080"
//     };
//     gulp.src("./index.html")
//         .pipe(open("", options));
// });

gulp.task('default', ['html', 'js', 'sass', 'connect', 'watch']);