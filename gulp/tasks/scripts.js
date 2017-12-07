'use strict';

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	gulpif   = require('gulp-if'),
	replace = require('gulp-replace'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	handleErrors = require('../util/handleErrors');

gulp.task('scripts', function() {
	return gulp.src(['src/js/**/*.js'])
	.pipe(gulpif(global.mode !== 'dev',uglify()))
	.on('error', handleErrors)
	.pipe(gulp.dest(global.destination + '/js'));
});