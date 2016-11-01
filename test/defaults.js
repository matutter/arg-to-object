var ato = require('..')
var assert = require('chai').assert

var args = ['-arg1', 'arg1-new-data']
var seed_value_1 = 'arg1-default-data'
var seed_value_2 = 'arg2-default-data'
var seed = {
  arg1: seed_value_1,
  arg2: seed_value_2
}

var default_a = { b : "a" }
var default_b = { a : "a" }
var args = '-a b'
var expect_a = { a: "b", b: "a" }
var expect_b = { a: "b" }

describe(`ato.parse(${args}, ${str(default_a)})`, ()=> {

  it(`should yield ${str(expect_a)} & include default values`, ()=> {
    var res = ato.parse(args, default_a)
    assert.deepEqual(res, expect_a)
  })

})

describe(`ato.parse(${args}, ${str(default_b)})`, ()=> {

  it(`should yield ${str(expect_b)} & overwrite default values`, ()=> {
    var res = ato.parse(args, default_b)
    assert.deepEqual(res, expect_b)
  })

})
