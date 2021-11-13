import DSU from "./disjoint-union-set";

/**
 * Find is fast O(1) but union takes O(n) at most 2*N + 2 array accesses
 * Trees are flat, but too expensive to keep them flat
 */
export default class QuickFind implements DSU {
  private id: number[] = []

  constructor(N: number) {
    Array.from({ length: N }, (_, i) => this.id[i] = i)
  }

  union(p: number, q: number): void {
    if (this.connected(p, q))
      return

    const pid = this.id[p]
    const qid = this.id[q]

    for (let i = 0; i < this.id.length; ++i) {
      if (this.id[i] === pid) this.id[i] = qid
    }
  }

  connected = (p: number, q: number): boolean => this.id[p] == this.id[q]
}