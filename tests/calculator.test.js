// Tests use Node's built-in test runner (node --test), so there are no
// dependencies to install. Each function has a happy path, an edge case, and
// where relevant an error case.

const test = require('node:test')
const assert = require('node:assert')
const { add, subtract, multiply, divide } = require('../src/calculator')

test('add: sums two numbers', () => {
  assert.strictEqual(add(2, 3), 5)
})

test('add: handles negatives', () => {
  assert.strictEqual(add(-4, 1), -3)
})

test('subtract: difference of two numbers', () => {
  assert.strictEqual(subtract(10, 4), 6)
})

test('subtract: result can be negative', () => {
  assert.strictEqual(subtract(3, 8), -5)
})

test('multiply: product of two numbers', () => {
  assert.strictEqual(multiply(6, 7), 42)
})

test('multiply: anything times zero is zero', () => {
  assert.strictEqual(multiply(99, 0), 0)
})

test('divide: quotient of two numbers', () => {
  assert.strictEqual(divide(20, 5), 4)
})

test('divide: throws when dividing by zero', () => {
  assert.throws(() => divide(1, 0), /Cannot divide by zero/)
})
