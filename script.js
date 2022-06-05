// Array for holding book objects, the "library"
const myLibrary = [];

// Book constructor function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Added books for testing display
addBook(new Book('Against The Day', 'Thomas Pynchon', 1000));
addBook(new Book('100 Years Of Solitude', 'Gabriel Garcia Marquez', 400));

// Adds a single book object to the "library"
function addBook(book) {
    myLibrary.push(book);
}

// Creates a single book object from the form data
function createBookFromForm() {
    let title = document.querySelector('.title-field').value;
    let author = document.querySelector('.author-field').value;
    let pages = document.querySelector('.pages-field').value;

    return {title, author, pages};
}

const submitButton = document.querySelector('.submit-button');
const title = document.querySelector('.title-field');
const author = document.querySelector('.author-field');
const pages = document.querySelector('.pages-field');
function clearForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
}

// Adds a single book object from the form data
function addBookFromForm() {
    addBook(createBookFromForm());
    clearForm();
    displayLibrary();
}

// Displays the current library contents to the page
const libraryContainer = document.querySelector('.library');
function displayLibrary(){
    libraryContainer.innerHTML = '';
    for(let index in myLibrary) {
        // Stores the current book object, to minimize syntax
        const currentBook = myLibrary[index];

        // create a card div
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');

        libraryContainer.appendChild(bookCard);

        // append elements within the card div
        // corresponding to the book's info
        const bookTitle = document.createElement('p');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = currentBook.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = currentBook.author;

        const bookPages = document.createElement('p');
        bookPages.classList.add('book-pages');
        bookPages.textContent = currentBook.pages;

        const readButton = document.createElement('button');
        readButton.classList.add('read-button');
        readButton.setAttribute('type', 'button');
        readButton.textContent = 'Read';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.textContent = 'Delete';

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readButton);
        bookCard.appendChild(deleteButton);
    }
}

// Called here to display the default library when the page opens
displayLibrary();




