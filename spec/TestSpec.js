var TestClass = require('../lib/TestClass').TestClass;

describe('TestClass', function() {
  it('length', function() {
    expect(TestClass.list.length).toEqual(3);
  });
});
