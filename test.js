const assert = require('assert');
const mocha = require('mocha');
const calc = require('./calculator');

describe('Calculator', function() {
  describe('add positive numbers()', function() {
    it('should return 10 when the value is 5 and 5', function() {
      assert.equal(calc(5,5), 10);
    });
  });
  describe('add negative numbers()', function() {
    it('should return -5 when the value is -2 and -3', function() {
      assert.equal(calc(-2,-3), -6);
    });
  });
});
