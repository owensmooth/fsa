const { sum, multiply, divide, subtrakt, power, Person, OldPerson } = require('./index')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('test description', () => {
  const gay = {
    benny: 'fatt',
    now: 1
  }

  const { benny, now } = gay
  expect(benny).toBe('fatt')
  expect(now).toBe(1)
})

test('description 3', () => {
  expect(multiply(10, 5)).toBe(50)
})

test('description 4', () => {
  expect(divide(10, 5)).toBe(2)
})

test('description 5', () => expect(subtrakt(10, 5)).toBe(5))

test('description 6', () => expect(power(6)).toBe(36))

test('description 7', () => {
  const dave = new Person('dave', 69)
  dave.greet()
  dave.setAge(70)
  dave.greet()

  const oldDave = new OldPerson('dave', 69)
  oldDave.greet()
})
