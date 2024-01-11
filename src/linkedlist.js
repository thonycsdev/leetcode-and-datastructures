class LLNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new LLNode(value, null);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new LLNode(value, null);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value) {
    const node = new LLNode(value, this.head);
    this.head = node;
    this.length++;
  }

  insert(index, value) {
    const node = new LLNode(value, null);

    let currentIdx = 1; // comeca pelo 1 pq a primeira iteracao ja faz a troca para o next;
    let currentNode = this.head;

    if (index > this.length - 1) {
      this.append(value);
      return;
    }

    while (currentNode.next !== null && currentIdx < index) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    node.next = currentNode.next;
    currentNode.next = node;
    this.length++;
  }

  remove(index) {
    let currentIdx = 1;
    let currentNode = this.head;
    while (currentIdx < index) {
      currentNode = currentNode.next;
      currentIdx++;
    }
    currentNode.next = currentNode.next.next;
    this.length--;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log({ array, length: this.length });
  }
}

const myLinkedList = new LinkedList(0);
myLinkedList.append(10);
myLinkedList.append(20);
myLinkedList.insert(1, 6);
myLinkedList.insert(15, 30);
myLinkedList.insert(3, 15);
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.printList();
