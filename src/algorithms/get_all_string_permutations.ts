export default function getAllStringPermutations(s: string): string[] {
  const permutations: string[] = []
  permute(s, '', permutations)

  return permutations
}

/**
 * Call tree for string 'abc'
 * 
 *          a,bc ------------- b,ac -------------- c,ab
 *         /    \             /    \              /    \
 *       ab,c   ac,b        ba,c   bc,a         ca,b  cb,a
 *       /        \         /        \          /        \
 *     abc,""     acb,""  bac,""     bca,""   cab,""    cba,""
 * 
 * Runs in O(n * n!)
 * 
 * @param s given string
 * @param prefix current fixed prefix  
 * @param permutations result array containing all permutations 
 */
function permute(s: string, prefix: string, permutations: string[]): void {
  if (s.length === 0) {
    permutations.push(prefix)
  }
  else {
    for (let i = 0; i < s.length; i++) {
      const rem = s.slice(0, i).concat(s.slice(i + 1))
      permute(rem, prefix.concat(s[i]), permutations)
    }
  }
}

