const expect = require('chai').expect;
const sumOfOther = require('./sumOfOther.js');

describe('Sum Of Others', () => {
  it('sum', () => {
    expect([8, 7, 6, 9]).to.eql(sumOfOther([2, 3, 4, 1]));
  });
});
