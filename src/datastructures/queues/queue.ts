import { LinkedListNode } from "../linked-list/linked-list-node"

export class Queue<T> {
  private front: LinkedListNode<T> = null
  private rear: LinkedListNode<T> = null
  private readonly isEmptyMessage = 'Queue is empty'

  /**
   * Add element to the end of the queue
   * Runtime complexity O(1)
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

  public print = (): void => {
    let p = this.front
    while (p) {
      p = p.next
    }
  }

}