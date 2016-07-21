var ato = require('..')
var assert = require('chai').assert

describe('ato on actual argv', ()=> {
  it('should produce a flat object', ()=> {
    var params = ato.parse(process.argv, {})
    assert.deepEqual(params, {})
  })
})
