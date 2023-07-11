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

function displayBooks() {
  newBooks.innerHTML = '';
  bookList.forEach((book, index) => {
    const shelf = `
            <div>
              <p>${book.titleVal}</p>
              <p>${book.authorVal}</p>
              <button id=${index} class="btn" type="button">Remove</button>
              <hr>
            </div>
      `;
    newBooks.insertAdjacentHTML('beforeend', shelf);
    const remBtn = document.getElementById(`${index}`);

    function removeBook() {
      bookList.splice(this, 1);
      saveStorage();
      displayBooks();
    }
    remBtn.addEventListener('click', removeBook.bind(index));
  });
}

button.addEventListener('click', (event) => {
  event.preventDefault();

  const titleVal = title.value;
  const authorVal = author.value;

  const book = { titleVal, authorVal };
  bookList.push(book);

  saveStorage(bookList);
  displayBooks();
});

displayBooks(bookList);