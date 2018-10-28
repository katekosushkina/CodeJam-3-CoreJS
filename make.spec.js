const expect = require('chai').expect;
const make = require('./make.js');

describe('make', () => {
  it('function call 4 times', () => {
    expect(777).to.eql(make(15)(34, 21, 666)(41)(sum));
  });
  it('make', () => {
    expect(1596).to.eql(console.log(make(15)(34, 21, 666)(41)(42)(sum)));
  });
});
