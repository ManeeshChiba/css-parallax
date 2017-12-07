'use strict';

var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    sassLint     = require('gulp-sass-lint'),
    handleErrors = require('../util/handleErrors');

gulp.task('scsslint', function () {

  return gulp.src(['src/scss/**/*.scss','!src/scss/vendor/**/*.scss','!src/scss/_mixins.scss'])
    .pipe(sassLint({
      options:{
      	formatter: 'stylish'
      },
      configFile: '.sass-lint.yml'
    }))
    .pipe(sassLint.format())
    .on('error', handleErrors);
});