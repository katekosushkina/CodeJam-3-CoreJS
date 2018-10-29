const expect = require('chai').expect;
const recursion = require('./recursion.js');

describe('recursion', () => {
  it('recursion1', () => {
    expect([[100], [90, 120], [70, 99, 110, 130]]).to.eql(recursion({
      value: 100,
      left: {
        value: 90,
        left: { value: 70 },
        right: { value: 99 },
      },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    }));
  });
});
