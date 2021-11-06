export default class LinkedListNode<T> {
  value: T
  next: LinkedListNode<T> = null

  constructor(value: T) {
    this.value = value  
  }
}
