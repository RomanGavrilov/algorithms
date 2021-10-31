/**
 * Prints all powers of 2 from 1 to n
 * Runs in O(log n)
 * @param n upper bound
 */
export default function getPowersOfTwo(n: number, result: number[]): number {
  if (n == 1) {
    result.push(1)
    return 1
  }
  else {
    const prev = getPowersOfTwo(Math.floor(n / 2), result)
    const current = (2 * prev)
    result.push(current)
    return current
  }
}
