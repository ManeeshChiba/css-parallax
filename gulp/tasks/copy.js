'use strict';

var gulp = require('gulp');

gulp.task('copy', function () {
  var staticAssets = gulp.src([
    'src/**/*',
    // Exclude the following:
    '!src/{js,js/**}', // scripts are handled by scripts task
    '!src/{img,img/**}', // handled by image task
    '!src/{scss,scss/**}', // handled by styles task
  ])
  .pipe(gulp.dest(global.destination));
  return staticAssets;
});