Test = require("../src/test").Test

describe "Test", ->
  @test = null
  beforeEach ->
    @test = new Test

  describe "when changing the endpoint of one import", ->
    it "adds one import", ->
      console.log  'test'
      expect(@test.length).toEqual 2
