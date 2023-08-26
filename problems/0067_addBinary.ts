// https://leetcode.com/problems/add-binary/description/

function addBinary(a: string, b: string): string {
  let aPtr = a.length - 1
  let bPtr = b.length - 1
  let result = ""
  let carryOver = false
  let aVal = ""
  let bVal = ""
  while (aPtr >= 0 || bPtr >= 0) {
    aVal = aPtr >= 0 ? a[aPtr] : "0"
    bVal = bPtr >= 0 ? b[bPtr] : "0"

    if (aVal === "0" && bVal === "0") {
      if (carryOver) {
        result = "1" + result
        carryOver = false
      } else {
        result = "0" + result
      }
    } else if ((aVal === "1" && bVal === "0") || (aVal === "0" && bVal === "1")) {
      if (carryOver) {
        result = "0" + result
      } else {
        result = "1" + result
        carryOver = false
      }
    } else {
      if (carryOver) {
        result = "1" + result
      } else {
        result = "0" + result
        carryOver = true
      }
    }
    aPtr--
    bPtr--
  }
  if (carryOver) result = "1" + result
  return result
};

const printAddBinary = (a: string, b: string) => {
  console.log(addBinary(a, b))
}

printAddBinary("001", "011")
printAddBinary("11", "1")
printAddBinary("1010", "1011")
