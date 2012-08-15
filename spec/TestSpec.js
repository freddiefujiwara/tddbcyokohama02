var TestClass = require('../lib/TestClass').TestClass;

describe('TestClass', function() {
  it('length is 4', function() {
    expect(TestClass.list.length).toEqual(4);
  })
  it('length is not 3', function() {
    expect(TestClass.list.length).toNotEqual(3);
  })
});
