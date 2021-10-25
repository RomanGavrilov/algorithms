export class BinarySearchTreeNode<T>{
  value: T
  left: BinarySearchTreeNode<T>
  right: BinarySearchTreeNode<T>

  constructor(value: T) { this.value = value }

  public insert = (
    node: BinarySearchTreeNode<T>,
    value: T,
    compareFn: (a: T, b: T) => number): BinarySearchTreeNode<T> => {

    if (!node) {
      return new BinarySearchTreeNode<T>(value)
    }

    if (compareFn(node.value, value) > 0) {
      node.left = this.insert(node.left, value, compareFn)
    }

    if (compareFn(node.value, value) < 0) {
      node.right = this.insert(node.right, value, compareFn)
    }

    return node
  }
}
