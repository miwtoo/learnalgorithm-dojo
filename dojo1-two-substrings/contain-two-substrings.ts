export function containTwoSubstrings(s: string): boolean {
    const startWithAB = s.replace("AB", "0").replace("BA", "1");
    const startWithBA = s.replace("BA", "0").replace("AB", "1");

    const isContainAndNoOverlapByStartWithAB = startWithAB.includes('0') && startWithAB.includes('1')
    const isContainAndNoOverlapByStartWithBA = startWithBA.includes('0') && startWithBA.includes('1')

    if (isContainAndNoOverlapByStartWithAB || isContainAndNoOverlapByStartWithBA) {
        return true;
    }

    return false;
}