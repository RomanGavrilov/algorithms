/**
 * Reverses a given array inplace
 * Runs in O(n)
 * @param a - array of type any
 */
export class ReverseArray {
  public static execute<T>(a: T[]): T[] {
    const N = a.length
    for (let i = 0; i < N / 2; ++i) {
      const tmp = a[i]
      const other = N - 1 - i;
      a[i] = a[other]
      a[other] = tmp
    }

    return a
  }
}

