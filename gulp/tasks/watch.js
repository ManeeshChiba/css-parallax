'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  gulp.watch('src/*.html',  ['html']);
  gulp.watch('src/scss/**/*.scss',  ['styles','scsslint']); 
  gulp.watch('src/img/**/*',  ['images']);
  gulp.watch('src/js/**/*.js',  ['scripts','jshints']);
});