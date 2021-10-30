import { LinkedListNode } from "../linked-list/linked-list-node"

/**
 * Queue implementation based on linked list
 * Enqueue & Dequeue complexity O(1)
 */
export class Queue<T> {
  private front: LinkedListNode<T> = null
  private rear: LinkedListNode<T> = null
  private readonly isEmptyMessage = 'Queue is empty'

  /**
   * Add element to the end of the queue
   * Runs in O(1)
   * @param item - element to add
   */
  public enqueue = (item: T): void => {
    const newNode = new LinkedListNode<T>(item)

    if (!this.front) {
      this.front = newNode
      this.rear = this.front
    }
    else {
      this.rear.next = newNode
      this.rear = newNode
    }
  }

  /**
   * Removes and returns first element in the queue
   * Runs in O(1)
   * @returns first element from the queue
   */
  public dequeue = (): T => {
    if (!this.front) {
      throw new Error(this.isEmptyMessage)
    }
    const item = this.front
    this.front = this.front.next

    if (this.front == null) {
      this.rear = null
    }

    return item.value
  }

  private traverse = (action: (node: LinkedListNode<T>) => void): void => {
    let p = this.front
    while (p) {
      action(p)
      p = p.next
    }
  }

  public toString = (): string => {
    let str = ''
    this.traverse(node => str = str.concat(`${node.value},`))
    return str
  }

}