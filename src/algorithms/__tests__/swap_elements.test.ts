import swap from "../swap_elements"

const arr = [1, 2, 3, 4, 5]
swap(arr, 0, 4)

it('should swap array elements', () => {
  expect([5, 2, 3, 4, 1]).toStrictEqual(arr)
})

const a = [1, 2, 3, 4, 5];
[a[0], a[4]] = [a[4], a[0]]
it('should swap array elements', () => {
  expect([5, 2, 3, 4, 1]).toStrictEqual(a)
})