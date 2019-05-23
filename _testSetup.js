const assert = require('assert')
const chalk = require('chalk')

const tests = []

global.test = (name, callback) => {
  tests.push([name, callback])
}

// Jasmine light (to say the least)
global.expect = (actual) => ({
  toBe(expected) {
    assert.strictEqual(actual, expected)
  },
  toEqual(expected) {
    assert.deepStrictEqual(actual, expected)
  }
})

setTimeout(() => {
  let errors = 0

  console.log()

  for (const [name, fn] of tests) {
    assert.strictEqual(typeof name, 'string')
    assert.strictEqual(typeof fn, 'function')

    try {
      fn()
      console.log(chalk.green(`✅ "${name}"`))
    } catch (e) {
      console.error(chalk.red(`❌ "${name}"`))
      console.error()
      console.error(chalk.red(e.stack))
      console.error()
      errors++
    }
  }

  if (errors)
    process.exit(1)
  console.log()
  console.log(chalk.bold.green('All tests passed!'))
  console.log()
})

