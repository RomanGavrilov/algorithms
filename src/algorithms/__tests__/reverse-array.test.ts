import reverse from "../reverse-array";

const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const A_reversed = A.reverse();
it('should reverse a number array', () => {
  expect(reverse(A)).toEqual(A_reversed)
})

const B = ['A', 'B', 'C', 'D', 'E', 'F'];
const B_reversed = B.reverse();
it('should reverse a string array', () => {
  expect(reverse(B)).toEqual(B_reversed)
})



