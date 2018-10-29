const expect = require('chai').expect;
const make = require('./make.js');

const sum = function sum(a, b) {
  return a + b;
};

describe('make', () => {
  it('function call 4 times', () => {
    expect(777).to.eql(make(15)(34, 21, 666)(41)(sum));
  });
  it('function call 5 times', () => {
    expect(819).to.eql(make(15)(34, 21, 666)(41)(42)(sum));
  });
});
