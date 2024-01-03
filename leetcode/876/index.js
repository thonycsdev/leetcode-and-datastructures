/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let middleNode = head;
  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    middleNode = middleNode.next;
    currentNode = currentNode.next.next;
  }

  return middleNode;
};
