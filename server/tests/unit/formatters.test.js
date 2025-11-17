const { formatDate } = require('../../src/utils/formatters');

test('formats date correctly', () => {
  expect(formatDate('2025-11-10T12:00:00Z')).toBe('2025-11-10');
});