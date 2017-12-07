'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sassLint     = require('gulp-sass-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpif       = require('gulp-if'),
    rename       = require('gulp-rename'),
    handleErrors = require('../util/handleErrors');

gulp.task('styles', function () {

  return gulp.src(['src/scss/**/*.scss','!src/scss/vendor/**.*.scss'])
    .pipe( sass({ sourceComments: true, outputStyle: 'nested', errLogToConsole: true }))
    .pipe( gulp.dest(global.destination + '/css'))
    .pipe( gulpif( global.destination != 'dev' , sass({ sourceComments: false, outputStyle: 'compressed', errLogToConsole: true })) )
    .on('error', handleErrors)
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 1%', 'ie 9', 'ie 10']
    }))
    .pipe(gulpif(global.destination != 'dev', rename({suffix: '.min'})))
    .pipe( gulp.dest(global.destination + '/css'));
});

