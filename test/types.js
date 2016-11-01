

describe('arrays', ()=> {

  var args_1 = ['-args', 'are', 'so', 'awesome']
  var expect_1 = { args: [ 'are', 'so' ,'awesome'] }

  describe(`arguments: ${args_1}`, ()=> {
    it(`should yield an array of strings`, ()=> {
      var res = ato.parse(args_1)
      assert.deepEqual(res, expect_1)
    })
  })

  var args_2 = ['-args', '0', '1', '2']
  var expect_2 = { args: [ 0, 1, 2 ] }

  describe(`arguments: ${args_2}`, ()=> {
    it(`should yield an array of numbers`, ()=> {
      var res = ato.parse(args_2)
      assert.deepEqual(res, expect_2)
    })
  })

  var args_3 = ['-args', '0', 'mixed', '2']
  var expect_3 = { args: [ 0, 'mixed', 2 ] }

  describe(`arguments: ${args_3}`, ()=> {
    it(`should yield an array mixed types`, ()=> {
      var res = ato.parse(args_3)
      assert.deepEqual(res, expect_3)
    })
  })

  var args_4 = ['-args', '0', '2', '-split', '3', '4']
  var expect_4 = { args: [ 0, 2 ], split: [ 3, 4 ] }

  describe(`arguments: ${args_4}`, ()=> {
    it(`should yield ${str(expect_4)}`, ()=> {
      var res = ato.parse(args_4)
      assert.deepEqual(res, expect_4)
    })
  })

})


describe('booleans', () => {

  var args_1 = ['-tak']
  var expect_1 = { tak: true }
  describe(`ato.parse(${args_1})`, () => {
    it(`should be truthy | ${str(expect_1)}`, () => {
      var res = ato.parse(args_1)
      assert(res, expect_1)
    })
  })

  var args_2 = ['-tak', 'true']
  var expect_2 = { tak: true }
  describe(`ato.parse(${args_2})`, () => {
    it(`should be ${str(expect_2)}`, () => {
      var res = ato.parse(args_2)
      assert(res, expect_2)
    })
  })

  var args_3 = ['-tak', 'true']
  var expect_3 = { tak: true }
  describe(`ato.parse(${args_3})`, () => {
    it(`should be ${str(expect_3)}`, () => {
      var res = ato.parse(args_3)
      assert(res, expect_3)
    })
  })

  var args_4 = ['-tak', 'false']
  var expect_4 = { tak: false }
  describe(`ato.parse(${args_4})`, () => {
    it(`should be ${str(expect_4)}`, () => {
      var res = ato.parse(args_4)
      assert(res, expect_4)
    })
  }) 

})


describe('strings', () => {

  var args_1 = ['-tak', '" asdasd false"']
  var expect_1 = { tak: " asdasd false" }
  describe(`ato.parse(${args_1})`, () => {
    it(`should be ${str(expect_1)}`, () => {
      var res = ato.parse(args_1)
      assert(res, expect_1)
    })
  }) 

  var args_2 = ['-tak', 'abcd']
  var expect_2 = { tak: 'abcd' }
  describe(`ato.parse(${args_2})`, () => {
    it(`should be ${str(expect_2)}`, () => {
      var res = ato.parse(args_2)
      assert(res, expect_2)
    })
  }) 

})