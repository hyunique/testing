const caesarCipher = require('./caesarCipher')
test('caesarCipher', () => {
    expect(caesarCipher('abcdef',1)).toBe('bcdefg')
})