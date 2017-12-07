'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/*.html',  ['copy']);
  gulp.watch('src/scss/**/*.scss',  ['styles','scsslint']); 
  gulp.watch('src/img/**/*',  ['copy']);
  gulp.watch('src/js/**/*.js',  ['scripts','jshints']);
});