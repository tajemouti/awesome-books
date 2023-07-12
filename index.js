const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const button = document.getElementById('add-btn');
const newBooks = document.getElementById('new-books');

class Book {
  bookList;

  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.getStorage();
  }
}
  