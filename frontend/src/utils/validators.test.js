const {validate} =  require('../utils/validators')
const {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_MAXLENGTH,
    VALIDATOR_EMAIL
    } = require('../utils/validators')


describe('checking validators', () => {
    test('should return false if passed no value', () => {
        const isNotEmpty = validate('', [VALIDATOR_REQUIRE()])
        expect(isNotEmpty).toBe(false)
    })
    
    test('should return false if not an email', () => {
        const isNotEmail = validate('something', [VALIDATOR_EMAIL()])
        expect(isNotEmail).toBe(false)
    })

    test('should return true if an email', () => {
        const isEmail = validate('some@thing.com', [VALIDATOR_EMAIL()])
        expect(isEmail).toBe(true)
    })
})