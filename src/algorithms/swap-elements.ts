export default function swap<T>(arr: T[], i1: number, i2: number): T[] {
  return [arr[i1], arr[i2]] = [arr[i2], arr[i1]]
}
