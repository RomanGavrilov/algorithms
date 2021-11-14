const V = 10
const g = new Array<number[]>(V)

for (let i = 0; i < 10; i++) {
  g[i] = new Array<number>(V)
  for (let j = 0; j < i; ++j) {
    g[i][j] = j
  }
}

for (let i = 0; i < g.length; i++) {
  console.log(g[i].join(','))
}
