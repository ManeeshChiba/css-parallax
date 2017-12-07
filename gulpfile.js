'use strict';

/*
 * gulpfile.js
 * ===========
 * Rather than manage one giant configuration file responsible
 * for creating multiple tasks, each task has been broken out into
 * its own file in gulp/tasks. Any file in that folder gets automatically
 * required by the loop in ./gulp/index.js (required below).
 *
 * To add a new task, simply add a new task file to gulp/tasks.
 *
 * Modified upon https://github.com/brad426/web-app-boilerplate which was
 * heavily inspired by the gulp build for 
 * https://github.com/jakemmarsh/angularjs-gulp-browserify-boilerplate
 * 
 */
var fs          = require('fs'),
	onlyScripts	= require('./gulp/util/fileType')('js'),
	tasks       = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

global.isProd = false;
global.stipWildcard = /\/\*\*.*$/ig;

tasks.forEach(function(task) {
  require('./gulp/tasks/' + task);
});