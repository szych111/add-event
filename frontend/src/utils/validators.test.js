const { validate, VALIDATOR_EMAIL } = require('./validators')
const {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MAXLENGTH,
    VALIDATOR_TYPE_EMAIL
    } = require('./validators')



test('should return false if passed no value', () => {
    const isNotEmpty = validate('', [VALIDATOR_REQUIRE()])
    expect(isNotEmpty).toBe(false)
})

test('should return false if not an email', () => {
    const isNotEmail = validate('something', [VALIDATOR_EMAIL()])
    expect(isNotEmail).toBe(false)
})