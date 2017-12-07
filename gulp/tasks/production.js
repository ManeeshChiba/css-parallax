'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function(cb) {

  global.mode = 'prod';
  global.destination = 'dist';
  runSequence('clean', 'styles', ['scripts', 'copy'], cb);
});
