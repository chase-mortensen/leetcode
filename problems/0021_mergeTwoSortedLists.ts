/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let head: ListNode | null = null
  let curNode: ListNode | null = null
  let prevNode: ListNode | null = null
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curNode = list1
      list1 = list1.next
    } else {
      curNode = list2
      list2 = list2.next
    }
    if (!head) {
      head = curNode
    }
    if (prevNode) {
      prevNode.next = curNode
    }
    prevNode = curNode
  }

  while (list1) {
    curNode = list1
    list1 = list1.next
    if (!head) {
      head = curNode
    }
    if (prevNode) {
      prevNode.next = curNode
    }
    prevNode = curNode
  }

  while (list2) {
    curNode = list2
    list2 = list2.next
    if (!head) {
      head = curNode
    }
    if (prevNode) {
      prevNode.next = curNode
    }
    prevNode = curNode
  }

  return head
};

const printMergedList = (arr1: number[], arr2: number[]) => {
  let arr: number[] = []
  let head: ListNode | null = mergeTwoLists(convertArrayToList(arr1), convertArrayToList(arr2))
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  console.log(arr)
}

const convertArrayToList = (arr: number[]): ListNode | null => {
  let head: ListNode | null = null
  let curNode: ListNode | null = null
  let prevNode: ListNode | null = null
  if (arr.length) {
    head = new ListNode(arr[0])
    prevNode = head
    for (let i = 1; i < arr.length; i++) {
      curNode = new ListNode(arr[i])
      prevNode.next = curNode
      prevNode = curNode
    }
  }
  return head
}

printMergedList([1,2,4], [1,3,4])
printMergedList([], [])
printMergedList([], [1])