const bubble = require('./index');
const arr = [3, 7, 1, 16, 12, 19, 25, 13, 10];
test('bubbel sort array from lowest to highest number', () => {
  expect(bubble(arr)).toStrictEqual([1, 3, 7, 10, 12, 13, 16, 19, 25]);
});
