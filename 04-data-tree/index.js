class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(child) {
    this.children.push(child);
  }

 /* findval(value) {

  	for (const element of this.children) {
  		if (element.value == value) {
  			console.log(true)
  			//break;
  		}
  		console.log(element)
  		element.findval(value);
	}
  } */

  find(value) {
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].value == value) {
      	console.log('found')
      }
      else if (this.children[this.children.length - 1] == this.children[i] && this.children[this.children.length -1].value != value) {
      	console.log(this.children[i])
        for (let n = 0; n < this.children.length; n++) {
        	
          this.children[n].find(value); 
        } 
    } 
        else {
      	console.log(this.children[i])
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
const node8 = new Node('value-8');

root.addChild(node1);
root.addChild(node2);
node2.addChild(node3);
node2.addChild(node4);
node4.addChild(node5);
node4.addChild(node6);
node5.addChild(node7);
node1.addChild(node8);

//let result = 
root.find('value-8');
//console.log(root);
