import HashTable from "../hash-table"

class User {
  id: number
  name: string
}

const users = [
  { id: 1, name: 'user_1' },
  { id: 2, name: 'user_2' },
  { id: 3, name: 'user_3' },
  { id: 4, name: 'user_4' },
  { id: 5, name: 'user_5' },
  { id: 6, name: 'user_6' },
  { id: 7, name: 'user_7' }
]

it('should add and find elements in a hash table', () => {

  const mod = 3
  const hash = (id: number) => id % mod
  const keySelector = (user: User) => user.id
  const hashTable = new HashTable<User, number>(mod, hash, keySelector)

  for (const user of users) {
    hashTable.add(user)
  }

  const findId = 5
  const user = hashTable.get(findId)

  expect(user?.name).toEqual(users[findId - 1]?.name)
})
