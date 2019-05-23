import './_testSetup.mjs'
import chalk from 'chalk'
import divide from './esm'

test('5n / 2n === 2.5', () => {
  expect(divide(5n, 2n)).toBe(2.5)
})

test('5 / 2 === 2.5', () => {
  expect(divide(5, 2)).toBe(2.5)
})

test('20n / 3n', () => {
  expect(divide(20n, 3n).toFixed(2)).toBe('6.67')
})

test('5n / 2', () => {
  expect(divide(5n, 2)).toBe(2.5)
})

test('5 / 2n', () => {
  expect(divide(5, 2n)).toBe(2.5)
})

test('large numbers: bigint / number', () => {
  let sum = 0n
  let count = 100

  for (let i = 0; i < count; i++)
    sum += BigInt(Number.MAX_SAFE_INTEGER)

  const avg = divide(sum, count)

  expect(avg).toBe(Number.MAX_SAFE_INTEGER)
})

test('large numbers: number / bigint', () => {
  let sum = Number.MAX_SAFE_INTEGER
  let count = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(Number.MAX_SAFE_INTEGER)
  const avg = divide(sum, count)

  expect(avg).toBe(0.5)
})

test('from docs 1', () => {

  expect(
    divide(5000000000000000000000000n, 2000000000000000000000000n)
  ).toBe(2.5)
})
