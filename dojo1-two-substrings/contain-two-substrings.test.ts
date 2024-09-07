import { containTwoSubstrings } from './contain-two-substrings';

describe('containTwoSubstrings', () => {
    test.each([
        ['ABA', false],
        ['BACFAB', true],
        ['AXBYBXA', false],
        ['ABABAB', true],
        ['ABAXAB', true],
        ['BABXBA', true],
    ]
    )("should input %s return %o", (input, expected) => {
        expect(containTwoSubstrings(input)).toBe(expected);
    });
});