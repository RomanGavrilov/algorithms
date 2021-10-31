import getPowersOfTwo from "../get_powers_of_two"

const n = 4
const result: number[] = []
getPowersOfTwo(n, result)
const powersOf2 = [1, 2, 4]

it('should return all powers of two fro 1 to n', () => {
  expect(result).toStrictEqual(powersOf2)
})
