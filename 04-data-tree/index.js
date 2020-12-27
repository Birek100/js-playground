class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  findNode(node, callback) {
    console.log(this.value);
    if (this.value == node.value) {
      callback(node);
    } else {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].findNode(node);
      }
    }
  }
}

const root = new Node('val');
const node1 = new Node('value-1');
const node2 = new Node('value-2');
const node3 = new Node('value-3');
const node4 = new Node('value-4');
const node5 = new Node('value-5');
const node7 = new Node('value-7');
const node6 = new Node('value-6');
const node8 = new Node('value-8');

root.addChild(node1);
root.addChild(node2);
node2.addChild(node3);
node2.addChild(node4);
node4.addChild(node5);
node4.addChild(node6);
node5.addChild(node7);
node1.addChild(node8);
function check(node) {
  console.log(node);
}
root.findNode(node7, check);
//check(node7)

module.exports = Node;
