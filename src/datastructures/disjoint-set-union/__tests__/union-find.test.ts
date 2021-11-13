import UnionFind from "../union-find"

it('should union and find connections in disjoint set', () => {
  const N = 10
  // 0 1 2 3 4 5 6 7 8 9 - objects
  // 0 1 2 3 4 5 6 7 8 9 - connectivity state
  const dsu = new UnionFind(N)

  dsu.union(4, 3)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 2 3 3 5 6 7 8 9
  expect(dsu.connected(4, 3)).toBeTruthy()

  dsu.union(3, 8)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 2 8 8 5 6 7 8 9
  expect(dsu.connected(3, 8)).toBeTruthy()
  expect(dsu.connected(4, 8)).toBeTruthy()

  dsu.union(6, 5)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 2 8 8 5 5 7 8 9
  expect(dsu.connected(5, 6)).toBeTruthy()
  
  dsu.union(9, 4)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 2 8 8 5 5 7 8 8
  expect(dsu.connected(9, 4)).toBeTruthy()
  expect(dsu.connected(9, 3)).toBeTruthy()
  expect(dsu.connected(9, 8)).toBeTruthy()

  dsu.union(2, 1)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 1 8 8 5 5 7 8 8
  expect(dsu.connected(2, 1)).toBeTruthy()

  expect(dsu.connected(5, 0)).toBeFalsy()

  dsu.union(2, 1)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 1 8 8 5 5 7 8 8
  expect(dsu.connected(2, 1)).toBeTruthy()
  
  
  dsu.union(5, 0)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 1 8 8 0 0 7 8 8
  expect(dsu.connected(5, 0)).toBeTruthy()
  expect(dsu.connected(6, 0)).toBeTruthy()
  
  dsu.union(7, 2)
  // 0 1 2 3 4 5 6 7 8 9
  // 0 1 1 8 8 0 0 1 8 8
  expect(dsu.connected(7, 2)).toBeTruthy()
  expect(dsu.connected(7, 1)).toBeTruthy()
  
  dsu.union(6, 1)
  // 0 1 2 3 4 5 6 7 8 9
  // 1 1 1 8 8 1 1 7 8 8
  expect(dsu.connected(6, 1)).toBeTruthy()
  expect(dsu.connected(6, 0)).toBeTruthy()
  expect(dsu.connected(6, 2)).toBeTruthy()
  expect(dsu.connected(5, 1)).toBeTruthy()
  expect(dsu.connected(5, 0)).toBeTruthy()
  expect(dsu.connected(5, 2)).toBeTruthy()

  expect(dsu.connected(7, 3)).toBeFalsy()
  expect(dsu.connected(2, 8)).toBeFalsy()
  expect(dsu.connected(0, 9)).toBeFalsy()
})