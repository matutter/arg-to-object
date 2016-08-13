var ato = require('..')
var assert = require('chai').assert

var args = '-args are "so awesome"'
var res = { args: [ 'are', 'so awesome'] }

describe('on the string "'+args+'"', ()=> {
  it('should produce {args: ["are", "so awesome"]}', ()=> {
    var params = ato.parse(args, {})
    assert.deepEqual(res, params)
  })
})
