import { BinarySearchTreeNode } from "../datastructures/binary-serach-tree/binary-search-tree-node"

export default function bst_nodes_sum(node: BinarySearchTreeNode<number>): number {
  if (!node) {
    return 0
  }

  return bst_nodes_sum(node.left) + node.value + bst_nodes_sum(node.right)
}