
var template = require('..');
var assert = require('assert');

describe('template(input, options)', function() {
  it('should replace keys', function() {
    assert(template('Hello :name!', {name: 'World'}) === 'Hello World!');
  });

  it('should skip unmatched keys', function() {
    assert(template('Hello :name!') === 'Hello :name!');
  });
});
