//Trie DS

class Node {
  constructor() {
    this.isEndOfTheWord = false;
    this.children = {};
  }
}

class TrieList {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    const length = word.length;

    let root = this.root;

    for (let i = 0; i < length; i++) {
      const currentVal = word[i];
      if (!root.children[currentVal]) {
        const newNode = new Node();
        root.children[currentVal] = newNode;
      }

      root = root.children[currentVal];
    }
    root.isEndOfTheWord = true;
  }

  search(word) {
    const length = word.length;

    let root = this.root;

    for (let i = 0; i < length; i++) {
      const currentVal = word[i];
      if (!root.children[currentVal]) {
        return false;
      }

      root = root.children[currentVal];
    }

    console.log(root, "root");
    return root.isEndOfTheWord;
  }

  delete(word) {
    const length = word.length;

    let root = this.root;

    for (let i = 0; i < length; i++) {
      const currentVal = word[i];
      if (!root.children[currentVal]) {
        return false;
      }

      root = root.children[currentVal];
    }

    if (root.isEndOfTheWord) {
      root.isEndOfTheWord = false;
    }

    if (Object.keys(root.children).length === 0) {
      root = null;
    }

    console.log(root, "root");
    return root.isEndOfTheWord;
  }
}

const words = ["there"];

const list = new TrieList();

words.map((word) => {
  list.insert(word);
});

console.log(list);
console.log(list.search("the"));
console.log(list.delete("the"));
console.log(list);
