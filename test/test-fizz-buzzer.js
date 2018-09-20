// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should be a whole number', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {num: 3, expected: 'fizz'},
      {num: 5, expected: 'buzz'},
      {num:15, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });
  //-----------not working yet because of how I set badInputs
  it('should raise error if arg not number', function() {
    // range of bad inputs where arg is not a number
    const badInputs = [
      'a', true, {}, []
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0], input[1]);
      });
    });
  });
});