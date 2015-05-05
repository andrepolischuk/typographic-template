
var template = require('..');
var textr = require('textr');
var assert = require('assert');
var tf = textr({name: 'World'})
  .use(template);

describe('template(input, options)', function() {
  it('should replace keys', function() {
    assert(tf('Hello :name!') === 'Hello World!');
  });

  it('should skip unmatched keys', function() {
    assert(tf('Hello :user!') === 'Hello :user!');
  });
});
