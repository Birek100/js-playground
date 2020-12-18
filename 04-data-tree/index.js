class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }
  find(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value == value) {
        return this.children[i];
      } else if (this.children[i] == this.children[this.children.length - 1]) {
        for (let n = 0; n < this.children.length; n++) {
          this.children[n].find(value);
        }
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
const node6 = new Node('value-6');
const node7 = new Node('value-7');

root.addChild(node1);
root.addChild(node2);
node2.addChild(node3);
node2.addChild(node4);
node4.addChild(node5);
node4.addChild(node6);
node5.addChild(node7);

let result = root.find('value-7');
