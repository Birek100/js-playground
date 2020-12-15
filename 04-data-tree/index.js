class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
}

const root = new Node();
const node1 = new Node('value-1');
const node2 = new Node('value-2');
const node3 = new Node('value-3');
const node4 = new Node('value-4');
const node5 = new Node('value-5');
const node6 = new Node('value-6');
const node7 = new Node('value-7');

root.addChild(node1);
root.addChild(node2);
node1.addChild(node3);
node1.addChild(node4);
node4.addChild(node5);
node4.addChild(node6);
node5.addChild(node7);

console.log(root);
console.log(node1);
console.log(node4);
console.log(node5);
