import getAllStringPermutations from "../get_all_string_permutations"

const s1 = 'abc'
const p1 = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

it('should return all permutations of a string `abc`', () => {
  expect(getAllStringPermutations(s1)).toStrictEqual(p1)
})

const s2 = 'aaa'
const p2 = ['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa']
it('should return all permutations of a given string `aaa`', () => {
  expect(getAllStringPermutations(s2)).toStrictEqual(p2)
})
