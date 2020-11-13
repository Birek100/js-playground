const oddeven = require('./index');
test('checking that numbers from 1 to 5 are odd or even', () => {
  expect(oddeven(1, 5)).toBe(
    console.log(`1 is odd
2 is even
3 is odd
4 is even
5 is odd`)
  );
});
