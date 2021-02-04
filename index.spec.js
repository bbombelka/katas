const incrementString = require('./index');

describe('incrementString function', function () {
  it('should be defined', function () {
    expect(incrementString).toBeDefined();
  });
  describe('called with foo', function () {
    it('should return foo1', function () {
      expect(incrementString('foo')).toEqual('foo1');
    });
  });
  describe('called with foobar23', function () {
    it('should return foobar24', function () {
      expect(incrementString('foobar23')).toEqual('foobar24');
    });
  });
  describe('called with foobar0099', function () {
    it('should return foobar0100', function () {
      expect(incrementString('foobar0099')).toEqual('foobar0100');
    });
  });
  describe('called with foobar99', function () {
    it('should return foobar100', function () {
      expect(incrementString('foobar99')).toEqual('foobar100');
    });
  });
  describe('called with 1foobar', function () {
    it('should return 1foobar1', function () {
      expect(incrementString('1foobar')).toEqual('1foobar1');
    });
  });
  describe('called with foobar000000001', function () {
    it('should return foobar000000002', function () {
      expect(incrementString('foobar000000001')).toEqual('foobar000000002');
    });
  });
  describe('called with foobar0', function () {
    it('should return foobar1', function () {
      expect(incrementString('foobar0')).toEqual('foobar1');
    });
  });
});
