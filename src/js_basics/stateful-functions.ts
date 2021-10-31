export default function createCounter() {
  let count = 0
  function increment() {
    ++count
  }

  function getNumOfExecutions() {
    return count
  }

  function log(): void {
    console.log(count)
  }

  return {
    increment,
    getNumOfExecutions,
    log
  }
}



