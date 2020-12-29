const Node = require('./index');

const root = new Node('value-root');
const node1 = new Node('value-1');
const node2 = new Node('value-2');
const node3 = new Node('value-3');
const node4 = new Node('value-4');
const node5 = new Node('value-5');
const node6 = new Node('value-6');
const node7 = new Node('value-7');
const node8 = new Node('value-8');
const node9 = new Node('value-9');

root.addChild(node1);
root.addChild(node2);
node1.addChild(node3);
node2.addChild(node4);
node2.addChild(node5);
node2.addChild(node6);
node6.addChild(node7);
node6.addChild(node8);
node7.addChild(node9);

function check(obj) {
  console.log(obj);
}

describe('find chosen node in data tree', () => {
  it('should find proper node', () => {
    const f = jest.fn();
    root.findNode(node9, f);
    expect(f).toHaveBeenCalledWith(node9);
  });

  it('should find root', () => {
    const f = jest.fn();
    root.findNode(root, f);
    expect(f).toHaveBeenCalledWith(root);
  });
});
