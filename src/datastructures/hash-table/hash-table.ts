import LinkedListNode from "../linked-list/linked-list-node"

export default class HashTable<T, U> {
  private readonly _table: Array<LinkedListNode<T>>
  private readonly _size: number
  private readonly _hash: (key: U) => number
  private readonly _keySelector: (item: T) => U
  private _load: number

  constructor(
    size: number,
    hash: (key: U) => number,
    keySelector: (item: T) => U) {

    this._size = size
    this._table = new Array(size)
    this._hash = hash
    this._keySelector = keySelector
    this._load = 0
  }

  public add = (item: T): void => {
    const i = this._hash(this._keySelector(item))
    const llnode = new LinkedListNode(item)
    let nonEmptySlot = this._table[i]

    if (nonEmptySlot) {
      while (nonEmptySlot.next) {
        nonEmptySlot = nonEmptySlot.next
      }
      nonEmptySlot.next = llnode
    }
    else {
      this._table[i] = llnode
    }

    this._load += (1 / this._size)
  }

  public get = (key: U): T | null => {
    const i = this._hash(key)
    let node = this._table[i]
    while (node && this._keySelector(node.value) !== key) {
      node = node.next
    }

    const lastKey = node && this._keySelector(node.value)

    return lastKey === key ? node.value : null
  }

  public maxSize = () => this._size

}
