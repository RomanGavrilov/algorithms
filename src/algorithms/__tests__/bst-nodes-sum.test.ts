import BinarySearchTree from "../../datastructures/binary-serach-tree/binary-search-tree"
import bst_nodes_sum from "../bst-nodes-sum"

const compareFn = (a: number, b: number) => a - b
const bst = new BinarySearchTree<number>(compareFn)
const a = 7, b = 15, c = -8, d = 9, e = 10, f = 0, g = 3
const nodes = [a, b, c, d, e, f, g]
const sum = nodes.reduce((a, b) => a + b)

for (const v of nodes)
  bst.insert(v)

it('should compute the sum of a given binary tree nodes', () => {
  expect(bst_nodes_sum(bst.root)).toEqual(sum)
})

