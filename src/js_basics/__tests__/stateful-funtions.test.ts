import createCounter from "../stateful-functions"

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()

it('should log number of function executions', () => {
  expect(counter.getNumOfExecutions()).toEqual(3)
})
