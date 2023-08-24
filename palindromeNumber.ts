// https://leetcode.com/problems/palindrome-number/description/

function isPalindrome(x: number): boolean {
    // without converting to a string
    if (x < 0) {
        return false
    }
    let divisor = 1
    while (x / divisor >= 10) {
        divisor *= 10
    }
    while (x !== 0) {
        let front = Math.floor(x / divisor)
        let back = x % 10
        if (front !== back) {
            return false
        }
        x = Math.floor((x % divisor) / 10)
        divisor /= 100
    }
    return true
};

function isPalindromeStringVersion (x: number) {
    // convert to a string
    const xStr = String(x)
    let front = 0, back = xStr.length - 1
    while (front <= back) {
        if (!(xStr[front] === xStr[back])) {
            console.log(xStr + ' is not a palindrome')
            return false
        }
        front++
        back--
    }
    console.log(xStr + ' is a palindrome')
    return true
}

function printPalindrome(x: number) {
    if (isPalindrome(x)) { // or isPalindromeStringVersion
        console.log(x + ' is a palindrome')
    }
    else {
        console.log(x + ' is not a palindrome')
    }
}

printPalindrome(121)
printPalindrome(1234321)
printPalindrome(-121)
printPalindrome(10)