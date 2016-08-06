var ato = require('..')
var assert = require('chai').assert

var args = ['-arg1', 'arg1-new-data']
var seed_value_1 = 'arg1-default-data'
var seed_value_2 = 'arg2-default-data'
var seed = {
  arg1: seed_value_1,
  arg2: seed_value_2
}

describe('Param object has default values not present in arguments', ()=> {
  it('should be preserved', ()=> {
    var res = ato.parse(args, seed)
    assert.equal(res.arg1, 'arg1-new-data')
    assert.equal(res.arg2, 'arg2-default-data')
  })
  it('should not overwrite the seed object', ()=> {
    var res = ato.parse(args, seed)
    assert.equal(seed.arg1, seed_value_1)
    assert.equal(seed.arg2, seed_value_2)
  })
})
