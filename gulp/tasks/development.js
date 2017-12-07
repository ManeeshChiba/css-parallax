'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', function(cb) {
  global.mode = 'dev';
  global.destination = 'dev';
  runSequence('clean', ['styles', 'scsslint', 'scripts', 'jshints', 'copy'], 'watch', cb);
});