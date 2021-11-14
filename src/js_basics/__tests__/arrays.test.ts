it('should test standard arrays api', () => {

  const a = [1, 2, 3, 4, 5]
  expect(5).toStrictEqual(a.pop())
  expect([1, 2, 3, 4]).toStrictEqual(a);

  // swap
  [a[2], a[3]] = [a[3], a[2]];
  expect([1, 2, 4, 3]).toStrictEqual(a) 
})
