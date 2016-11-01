var ato = require('..')
var assert = require('chai').assert


var args = ['-tak']
describe(`ato.parse( ${args} )`, ()=> {
  it('should interpreted the existence of a lone tak to be truthy', ()=> {
    var res = ato.parse(args, {})
    assert(res.tak, 'tag was not truthy')
  })
})

var args2 = ['-tak', 'false']
describe(`ato.parse( ${args2} )`, ()=> {
  it('should set tak=false', ()=> {
    var res = ato.parse(args2, {})
    assert(!res.tak , 'tak was truthy')
  })
})