//Flyweight Pattern

class Book {
  name;
  authorName;
  availability;

  constructor(name, authorName) {
    this.name = name;
    this.authorName = authorName;
  }
}

const bookMap = new Map();

function getKeyName(name, authorName) {
  return `${name.toLowerCase()}_${authorName.toLowerCase()}`;
}

function createBook(name, authorName) {
  const key = getKeyName(name, authorName);
  const alreadyCreated = bookMap.has(key);

  if (alreadyCreated) {
    return bookMap.get(key);
  }

  const book = new Book(name, authorName);
  bookMap.set(key, book);

  return book;
}

const bookList: Array<Book> = [];

function addBook(name, authorName, availability) {
  const book = {
    ...createBook(name, authorName),
    availability,
  };
  bookList.push(book);
}

addBook("A", "A", true);
addBook("A", "A", false);
addBook("A", "A", true);
addBook("B", "B", true);
addBook("B", "B", true);

console.log(bookList);
for (let [key, value] of bookMap.entries()) {
  console.log(value.name);
}
