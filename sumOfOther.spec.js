const expect = require('chai').expect;
const sumOfOther = require('./sumOfOther.js');

describe('Sum Of Others', () => {
  it('array with multiple items', () => {
    expect([8, 7, 6, 9]).to.eql(sumOfOther([2, 3, 4, 1]));
  });
  it('array with 1 item', () => {
    expect([0]).to.eql(sumOfOther([8]));
  });
});
