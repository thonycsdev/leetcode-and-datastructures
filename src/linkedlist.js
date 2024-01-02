class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new Node();
    node.data = value;
    node.next = null;
    this.head = node;

    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const node = new Node();
    node.data = value;
    node.next = null;
    this.tail.next = node;
    this.tail = node;
  }

  prepend(value) {}
}

const node1 = new Node(10);
const node2 = new Node(20);
const linked = new LinkedList(0);
linked.append(20);
console.log(linked);
