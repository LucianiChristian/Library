const myLibrary = [];

// Added books for testing display
addBook(new Book('Against The Day', 'Thomas Pynchon', 1000));
addBook(new Book('100 Years Of Solitude', 'Gabriel Garcia Marquez', 400));


function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBook(book) {
    myLibrary.push(book);
}

const libraryContainer = document.querySelector('.library');
function displayLibrary(){
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

// initial page display
displayLibrary();


