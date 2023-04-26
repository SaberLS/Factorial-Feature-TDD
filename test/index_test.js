var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('Input of 5 is equal 120', () => {
      //Setup
      const expectedResult = 120;
      const input = 5;
      //Exercise
      const output = Calculate.factorial(input);
      //Verify
      assert.strictEqual(output,expectedResult);
    });
    it('Input of 8 is equal 40320', () =>{
      //Setup
      const expectedResult = 40320;
      const input = 8;
      //Exercise
      const output = Calculate.factorial(input);
      //Verify
      assert.strictEqual(output,expectedResult);
    });
    it('Input of 0 is equal to 1', () => {
      //Setup
      const expectedResult = 1;
      const input = 0;
      //Exercise
      const output = Calculate.factorial(input);
      //Verify
      assert.strictEqual(output,expectedResult);
    });
    it('Input of -1 throws Error', () => {
      //Setup
      const expectedResult = new Error('Parameter is lower than 0');
      assert.throws(
  () => {
    Calculate.factorial(-1);
  });
    });
  });
});