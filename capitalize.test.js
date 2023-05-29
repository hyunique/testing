const capitalize = require('./capitalize');
test('takes string and capitalize first letter', () => {
    expect(capitalize('hello world')).toBe('Hello world');
})