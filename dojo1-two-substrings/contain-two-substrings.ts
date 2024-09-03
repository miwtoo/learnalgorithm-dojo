import { containTwoSubstrings } from './contain-two-substrings.test';

describe('containTwoSubstrings', () => {
    test.each([
        ['ABA', false],
        ['BACFAB', true],
        ['AXBYBXA', false],
        ['ABABAB', true]
    ]
    )("should input %s return %o", (input, expected) => {
        expect(containTwoSubstrings(input)).toBe(expected);
    });
});