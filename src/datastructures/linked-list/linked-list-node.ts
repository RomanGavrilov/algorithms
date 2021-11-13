export default class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> = null

  constructor(value: T) {
    this.value = value
  }

  public traverse = (action: (node: LinkedListNode<T>) => void): void => {
    let p = this
    while (p) {
      action(p)
    }
  }
}

