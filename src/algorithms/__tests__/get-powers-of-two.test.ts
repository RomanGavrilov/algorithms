import getPowersOfTwo from "../get-powers-of-two"

const n = 1033
const result = getPowersOfTwo(n)
const powersOf2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

it('should return all powers of two fro 1 to n', () => {
  expect(result).toStrictEqual(powersOf2)
})
