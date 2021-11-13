import LinkedListNode from "./linked-list-node";

export default class LinkedList<T> {
  private head: LinkedListNode<T>
  private tail: LinkedListNode<T>

  public add = (value: T): LinkedListNode<T> => {
    this.tail.next = new LinkedListNode<T>(value)
    this.tail = this.tail.next
    return this.tail
  }

  public traverse = (action: (node: LinkedListNode<T>) => void) => {
    this.head.traverse(action)
  }
}