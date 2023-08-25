// https://leetcode.com/problems/two-sum/description/

const twoSum = (nums: number[], target: number): number[] => {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
    return [0,0]
};

// what if the list was sorted?

const twoSumAlt = (nums: number[], target: number): number[] => {
    const sortedNums = [...nums].sort((a, b) => a - b)
    let front = 0, back = sortedNums.length - 1
    while (front < back) {
        let total = sortedNums[front] + sortedNums[back]
        if (total === target) {
            const firstIndex = nums.indexOf(sortedNums[front])
            let secondIndex = nums.indexOf(sortedNums[back])
            if (firstIndex === secondIndex) {
                secondIndex = nums.indexOf(sortedNums[back], firstIndex + 1)
            }
            return firstIndex > secondIndex ? [secondIndex, firstIndex] : [firstIndex, secondIndex]
        } else if (total < target) {
            front++
        } else {
            back--
        }
    }
    return [0,0]
}

const printTwoSum = (nums: number[], target: number) => {
    console.log(twoSumAlt(nums, target))
}

printTwoSum([2,7,11,15], 9)
printTwoSum([3,2,4], 6)
printTwoSum([3,3], 6)
printTwoSum([-1,-2,-3,-4,-5], -8)