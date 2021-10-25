import { BinarySearchTreeNode } from "./binary-search-tree-node"

export default class BinarySearchTree<T> {
  public root: BinarySearchTreeNode<T>
  private compareFn: (a: T, b: T) => number

  constructor(compareFn: (a: T, b: T) => number) {
    this.compareFn = compareFn
  }

  public insert = (value: T) => {
    if (!this.root) {
      this.root = new BinarySearchTreeNode<T>(value)
    }
    else {
      this.root.insert(this.root, value, this.compareFn)
    }
  }

  public print = (): void => { throw new Error('NotImplementedException') }
}


