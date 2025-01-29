class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  console.log('\n Running Merge Fuction');
  if (list1 === null && list2 === null) return null;

  const arr1 = list1 !== null ? iterateLinkedList(list1) : null;
  const arr2 = list2 !== null ? iterateLinkedList(list2) : null;
  let finalArr = [];

  if (arr1 === null) {
    finalArr = arr2!;
  } else if (arr2 === null) {
    finalArr = arr1;
  } else {
    finalArr = [...arr1, ...arr2];
  }

  console.log('1 - Final Array, before converting to LL: ', finalArr);
  console.log('2 - Final Array, before converting to LL: ', finalArr.sort());
  const result = linkedListFromArr(finalArr.sort((a, b) => a - b));
  console.log('The HEAD: ', result);
  return result;
}

function createNode(val: number, next?: ListNode | undefined) {
  return new ListNode(val, next);
}

// Converts a arr to a Linked List
function linkedListFromArr(arr: any[]): ListNode | null {
  let i = 0;
  let head = null;
  let current;
  while (i < arr.length) {
    if (i === 0) {
      head = createNode(arr[i]);
      current = head;
      i++;
      continue;
    }

    const temp = createNode(arr[i]);
    current!.next = temp;
    current = temp;
    i++;
  }

  return head;
}

function iterateLinkedList(head: ListNode) {
  let current = head as ListNode | null;
  const arr = [];
  while (current !== null) {
    if (!head.next) {
      arr.push(head.val);
      break;
    }
    console.log('Value: ', current!.val);
    console.log('Next: ', current!.next);
    arr.push(current.val);
    current = current.next;
    console.log('');
  }
  console.log('The Produced Array: ', arr);
  return arr;
}

// const head = linkedListFromArr(list);
// if (head instanceof ListNode) iterateLinkedList(head);

// const list1 = linkedListFromArr([3, 2, 1]);
// const list2 = linkedListFromArr([6, 5, 4]);

// const list1 = linkedListFromArr([]);
// const list2 = linkedListFromArr([]);

// const list1 = linkedListFromArr([]);
// const list2 = linkedListFromArr([0]);

const list1 = linkedListFromArr([-10, -6, -6, -6, -3, 5]);
const list2 = linkedListFromArr([]);

mergeTwoLists(list1, list2);
