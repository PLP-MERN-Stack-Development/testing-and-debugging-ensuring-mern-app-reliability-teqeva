const { add } = require('../../src/utils/math');

test('adds 1 + 2 = 3', () => {
  expect(add(1, 2)).toBe(3);
});