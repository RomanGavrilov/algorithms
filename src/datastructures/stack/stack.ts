import LinkedListNode from "../linked-list/linked-list-node";

export default class Stack<T> {
  private _top: LinkedListNode<T>
  private _size: number = 0

  public top = () => !this._top ? null : this._top.value

  public push = (element: T): number => {
    const e = new LinkedListNode(element)
    e.next = this._top
    this._top = e
    ++this._size
    return this._size
  }

  public pop = (): T => {
    if (!this._size) {
      return null
    }

    const top = this._top
    this._top = top.next
    --this._size
    return top.value
  }

  public size = () => this._size
}