'use strict';

var path = require('path');

/**
 * Filters out files that don't match the extension. Prevents
 * accidental inclusion of possible hidden files.
 * 
 * Usage:
 * var fileType = require('fileType');
 * fs.readdirSync('some/dir/js/').filter(fileType('js'));
 *
 * Or
 * var onlyScripts = require('fileType')('js');
 * fs.readdirSync('some/dir/js/').filter(onlyScripts);
 */
module.exports = function(extension) {
	var pattern = new RegExp("(\.(" + extension + ")$)", "i");
	return function(name) {
  		return pattern.test(path.extname(name));
  	}
};