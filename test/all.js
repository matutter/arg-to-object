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
