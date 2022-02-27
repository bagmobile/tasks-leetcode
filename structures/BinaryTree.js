class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    constructor() {
        this.root = null;
    }

    add(node) {

        if (!this.root) {
            this.root = node;
            return
        }

        let currentNode = this.root;
        while (currentNode) {
            if (node.value > currentNode.value) {
                if (!currentNode.right) {
                    currentNode.right = node;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            } else {
                if (!currentNode.left) {
                    currentNode.left = node;
                    break;
                } else {
                    currentNode = currentNode.left
                }
            }
        }
    }

    traverseDFS(node, callback) {
        if (!node) {
            return
        }
        if (callback) {
            callback(node)
        }

        this.traverseDFS(node.left, callback);
        this.traverseDFS(node.right, callback);
    }

    traverseBFS(callback) {
        const queue = [this.root];

        while (queue.length) {
            const node = queue.shift();
            callback(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
}

tree = new BinaryTree();
tree.add(new Node(5));
tree.add(new Node(7));
tree.add(new Node(5));
tree.add(new Node(25));
tree.add(new Node(2));
tree.add(new Node(34));


tree.traverseDFS(tree.root, (node) => console.log(node.value));
tree.traverseBFS((node) => console.log(node.value));
