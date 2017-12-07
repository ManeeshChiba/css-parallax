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
    .pipe( sass({
        sourceComments: (global.mode === 'dev') ? true : false,
        outputStyle: (global.mode === 'dev') ? 'nested': 'compressed',
        errLogToConsole: true
    }))
    .on('error', handleErrors)
    .pipe(autoprefixer({
        browsers: ['last 2 versions', '> 1%', 'ie 9', 'ie 10']
    }))
    .pipe( gulp.dest(global.destination + '/css'))
    .pipe(gulpif(global.destination != 'dev', rename({suffix: '.min'})))
    .pipe( gulp.dest(global.destination + '/css'));
});