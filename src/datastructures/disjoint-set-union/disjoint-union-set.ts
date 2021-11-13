/**
 * Disjoin union set
 */
export default interface DSU {
  /**
   * add connection between p and q
   * @param p 
   * @param q 
   */
  union(p: number, q: number): void

  /**
   * are p and q in the same component ?
   * @param p 
   * @param q 
   */
  connected(p: number, q: number): boolean
}
