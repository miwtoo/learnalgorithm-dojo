export function containTwoSubstrings(s: string): boolean {
    s = s.replace('AB', '0');
    s = s.replace('BA', '1');

    if (s.includes('0') && s.includes('1')) {
        return true;
    }

    return false;
}