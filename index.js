const title = document.getElementById('book-title');
const author = document.getElementById('book-author');
const button = document.getElementById('add-btn');
const newBooks = document.getElementById('new-books');

if (localStorage.getItem('booksDetails') === null) {
  localStorage.setItem('booksDetails', JSON.stringify([]));
}

const bookList = JSON.parse(localStorage.getItem('booksDetails'));

function saveStorage() {
  localStorage.setItem('booksDetails', JSON.stringify(bookList));
}