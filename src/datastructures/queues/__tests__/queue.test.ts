import { Queue } from "../queue"

const queue = new Queue<number>()
const datasource = [5, 4, 3, 2, 1, 0]
for (const x of datasource) { queue.enqueue(x) }

it('should remove and return first element from the queue', () => {

  const _5 = queue.dequeue()
  const _4 = queue.dequeue()
  const _3 = queue.dequeue()
  const _2 = queue.dequeue()
  const _1 = queue.dequeue()
  const _0 = queue.dequeue()

  expect(_5).toEqual(5)
  expect(_4).toEqual(4)
  expect(_3).toEqual(3)
  expect(_2).toEqual(2)
  expect(_1).toEqual(1)
  expect(_0).toEqual(0)
})

