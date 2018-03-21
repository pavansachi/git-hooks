const assert = require('assert');
const mocha = require('mocha');
const calc = require('./calculator');

describe('Calculator', function() {
  describe('add()', function() {
    it('should return 10 when the value is 5 and 5', function() {
      assert.equal(calc(5,5), 10);
    });
  });
});
