/**
 * Collects all powers of 2 from 1 to n in a result array
 * Runs in O(log n)
 * @param n upper bound
 */
export default function getPowersOfTwo(n: number): number[] {
  const result: number [] = [1];

  (function execute (n: number) : number {
    if(n == 1) {
      return 1
    }
    else {
      const prev = execute(Math.floor(n / 2))
      const current = 2 * prev
      result.push(current)
      return current
    }
  })(n)

  return result
}
