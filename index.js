
'use strict';

/**
 * Module dependencies
 */

var tpl = require('mnml-tpl');

/**
 * Expose transformation
 *
 * @param {String} input
 * @param {Object} options
 * @return {String}
 * @api public
 */

module.exports = function(input, options) {
  return tpl(input)(options || {});
};
