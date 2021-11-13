import DSU from "./disjoint-union-set"

/**
 * Quick union with path compression supports find and union in O(lgN)
 * id[] of size N
 * id[i] is parent of i
 * Root of i is id[id[id[...id[i]...]]]
 * Two objects are connected if they have the same root
 * sz[i] - number of objects in the tree rooted at i
 */
export default class QuickUnion implements DSU {
  private id: number[] = []
  private sz: number[] = []

  constructor(N: number) {
    Array.from({ length: N }, (_, i) => {
      this.id[i] = i
      this.sz[i] = 1
    })
  }

  private root(i: number): number {
    while (this.id[i] !== i) {
      i = this.id[i]
      this.id[i] = this.id[this.id[i]]
    }
    return i
  }

  public union(p: number, q: number): void {
    const pRoot = this.root(p)
    const qRoot = this.root(q)
    if (pRoot == qRoot) return

    if (this.sz[pRoot] < this.sz[qRoot]) {
      this.id[pRoot] = qRoot
      this.sz[qRoot] += this.sz[pRoot]
    }
    else {
      this.id[qRoot] = pRoot
      this.sz[pRoot] += this.sz[qRoot]
    }
  }

  public connected(p: number, q: number): boolean {
    return this.root(p) === this.root(q)
  }

}