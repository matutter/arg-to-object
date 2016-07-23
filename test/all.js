var ato = require('..')
var assert = require('chai').assert

var argv = [
  'mocha',
  'all.js',
  '-bool',
  'true',
  '-evalBool', 'false',
  '-string',
  'string1',
  '-evalString', '"Im a string"',
  '-ary1',
  'i0',
  'i1',
  'i2',
  'i4',
  '-evalArray', '[0, 1, 2 , 3]',
  '-numeric',
  '1234'
]

var obj = {
  bool: true,
  evalBool: true,
  string: 'string1',
  evalString: 'evalString1',
  ary1: [],
  evalArray: [],
  numeric: -1
}

describe('ato on an array of arguments', ()=> {
  it('should produce a flat object', ()=> {
    var params = ato.parse(argv, obj)
    assert.equal(params.numeric, 1234)
  })
})

describe('when no arguments are provided', ()=> {
  it('should use process.argv', ()=> {
    var expected = { key: { key: 'val' } }
    process.argv = [ '-key', '{key: "val"}' ]
    var result = ato.parse()
    assert.deepEqual(result, expected)
  })
})

describe('when an object with defaults is provided, but no arguments', () => {
  it('should use process.argv and fill the defaults objects', () => {
    process.argv = [ '-key', '{key: "val"}' ]
    var params = {
      key : { key: 'overwrite me!' },
      key2: 'unchanged'
    }
    var expected = {
      key : { key: "val"},
      key2: 'unchanged'
    }
    var result = ato.parse(params)
    assert.deepEqual(result, expected)
  })
})

describe('when a tak "-" is preasent with no value after', ()=> {
  it('creates a boolean property of "true"', ()=>{
    var expected = true
    var result = ato.parse(['-val'])
    assert.equal(result.val, expected)
  })
})
