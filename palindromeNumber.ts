function isPalindrome(x: number): boolean {
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

    // without converting to a string
    // if (x >= 0) {

    // }
    // return false
};

isPalindrome(121)
isPalindrome(-121)
isPalindrome(10)