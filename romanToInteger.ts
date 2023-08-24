// https://leetcode.com/problems/roman-to-integer/description/

function romanToInt(s: string): number {
    interface Numerals {
        "I": number,
        "V": number,
        "X": number,
        "L": number,
        "C": number,
        "D": number,
        "M": number
    }
    const NUMERALS: Numerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    if (s.length < 1) return 0
    if (s.length === 1) return NUMERALS[s[0] as keyof Numerals]
    let i: number = 0
    let total: number = 0
    while (i < s.length - 1) {
        if (NUMERALS[s[i] as keyof Numerals] < NUMERALS[s[i + 1] as keyof Numerals]) {
            total -= NUMERALS[s[i] as keyof Numerals]
        } else {
            total += NUMERALS[s[i] as keyof Numerals]
        }
        i++
    }
    total += NUMERALS[s[s.length - 1] as keyof Numerals]
    return total
}

console.log(romanToInt("III"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))