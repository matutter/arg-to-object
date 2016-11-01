ato = global.ato = require('..')
assert = global.assert = require('chai').assert
str = global.str = obj => JSON.stringify(obj, null, 0).replace(/"/g,'')

describe('default', () => {
  require('./defaults.js')
})

describe('splitting arguments', () => {
  require('./splitargs.js')
})

describe('type interpolation', () => {
  require('./types.js')
})

describe('misc', () => {
  require('./misc.js')
})