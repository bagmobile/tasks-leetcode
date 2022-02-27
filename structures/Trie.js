class TrieNode {
    constructor() {
        this.children = new Map();
        this.isTerminated = false;
    }

}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let currentNode = this.root;

        for (let current of word) {
            if (currentNode.children.has(current)) {
                currentNode = currentNode.children.get(current);
            } else {
                const newTrieNode = new TrieNode();
                currentNode.children.set(current, newTrieNode);
                currentNode = newTrieNode;
            }
        }
        currentNode.isTerminated = true;
    }

    search(word) {
        let currentNode = this.root;
        for (const wordElement of word) {
            if (currentNode.children.has(wordElement)) {
                currentNode = currentNode.children.get(wordElement)
            } else {
                return false
            }
        }
        return currentNode.isTerminated;
    }

    startWith(word) {
        let currentNode = this.root;
        for (const wordElement of word) {
            if (currentNode.children.has(wordElement)) {
                currentNode = currentNode.children.get(wordElement)
            } else {
                return false
            }
        }
        return true
    }

    suggestNextCharacters(word) {

        let currentNode = this.root;
        for (const wordElement of word) {
            if (currentNode.children.has(wordElement)) {
                currentNode = currentNode.children.get(wordElement)
            } else {
                return [];
            }
        }
        return Array.from(currentNode.children.keys());
    }

    suggestNextWords(word) {
        const result = [];
        let currentNode = this.root;
        for (const wordElement of word) {
            if (currentNode.children.has(wordElement)) {
                currentNode = currentNode.children.get(wordElement)
            } else {
                return [];
            }
        }
        this.dfs(currentNode, this.addChar(result));
        return result.map(item => word + item);
    }


    addChar = (result) => {
        let word = '';
        return (char, isEnd = false) => {
            word += char;
            if (isEnd) {
                result.push(word);
                word = '';
            }
        }
    }

    dfs(node, callback) {

        for (const [key, value] of node.children) {

            callback(key, value.isTerminated);

            if (!value.isTerminated) {
                this.dfs(value, callback);
            }
        }
    }

}

const trie = new Trie();
trie.insert('roll');
trie.insert('rmmmba');
trie.insert('room');
console.log(trie.suggestNextWords('r'))
//console.log(trie.suggestNextCharacters('rol'))
//console.log(trie.search('roll'))
//console.log(trie.search('rol'))
//console.log(trie.search('rolla'))
//console.log(trie.startWith('roll'))
//console.log(trie.startWith('rw'))
