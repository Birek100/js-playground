class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

  findNode(node, callback) {
    if (this.value == node.value) {
      return callback(node);
    } else {
      for (let i = 0; i < this.children.length; i++) {
        this.children[i].findNode(node, callback);
      }
    }
  }
}

module.exports = Node;
