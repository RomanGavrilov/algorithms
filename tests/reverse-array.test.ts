import { reverse } from "../src/reverse-array";

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A_reversed = A.reverse();

it('should reverse an array', () => {
  expect(reverse(A)).toEqual(A_reversed)
})

