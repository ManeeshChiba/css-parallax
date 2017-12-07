'use strict';

var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	handleErrors = require('../util/handleErrors');

gulp.task('jshints',function(){
	return gulp.src(['src/js/**/*.js', '!src/js/vendor/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter(stylish))
});