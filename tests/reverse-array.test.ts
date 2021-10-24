import { ReverseArray } from "../src/reverse-array";

it('should reverse an array using prototype reverse', () => {
  expect(([1,2,3,4,5,6,7,8,9,10].reverse()))
  .toEqual([10,9,8,7,6,5,4,3,2,1])
})

it('should reverse an array', () => {
  expect(ReverseArray.execute([1,2,3,4,5,6,7,8,9,10]))
  .toEqual([10,9,8,7,6,5,4,3,2,1])
})

