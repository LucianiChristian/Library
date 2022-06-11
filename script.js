// Array for holding book objects, the "library"
let myLibrary = [];

// Book constructor function
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Inverts the current readStatus value on a given book
Book.prototype.changeReadStatus = function() {
    this.readStatus = !this.readStatus;
    displayLibrary();
};


// Added books for testing display
addBook(new Book('Against The Day', 'Thomas Pynchon', 1000, false));
addBook(new Book('100 Years Of Solitude', 'Gabriel Garcia Marquez', 400, false));



// Adds a single book object from the form data.
// Updates the library display to reflect the change.
function addBookFromForm() {
    addBook(createBookFromForm());
    clearForm();
    displayLibrary();
    closeModal();
}

    // Adds a single book object to the "library". Used within createBookFromForm().
    function addBook(book) {
        myLibrary.push(book);
    }

    // Creates a single book object from the form data. Used within createBookFromForm().
    function createBookFromForm() {
        let title = document.querySelector('.title-field').value;
        let author = document.querySelector('.author-field').value;
        let pages = document.querySelector('.pages-field').value;

        return new Book(title, author, pages, false);
    }

    // Clears all values from the form controls. Used within createBookFromForm().
    const submitButton = document.querySelector('.submit-button');
    const title = document.querySelector('.title-field');
    const author = document.querySelector('.author-field');
    const pages = document.querySelector('.pages-field');
    function clearForm() {
        title.value = '';
        author.value = '';
        pages.value = '';
    }

// Removes a single book object from the myLibrary array. Updates the library display to reflect the change.
function removeBook(currentBookCard) {
    myLibrary = myLibrary.filter(book => book !== myLibrary[currentBookCard.dataset.index]);
    displayLibrary();
}

// Displays the current library contents to the page
const libraryContainer = document.querySelector('.library');
function displayLibrary(){
    libraryContainer.innerHTML = '';
    for(let index in myLibrary) {
        // Stores the current book object, to minimize syntax
        const currentBook = myLibrary[index];

        addBookCard(currentBook, index);
    }
}

// Creates a full book card and appends it to the library container
function addBookCard(currentBook, index) {
        // Create a card div
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');
        bookCard.dataset.index = index;

        // Add the card div to library container
        libraryContainer.appendChild(bookCard);

        // Create details of the card div
        const topDiv = document.createElement('div');
        topDiv.classList.add('top-div');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.textContent = 'x';

        const bookTitle = document.createElement('h3');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = currentBook.title;

        const bookAuthor = document.createElement('p');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = 'Author : ' + currentBook.author;

        const bookPages = document.createElement('p');
        bookPages.classList.add('book-pages');
        bookPages.textContent = currentBook.pages + ' pages';

        const readLabel = document.createElement('label');
        readLabel.classList.add('switch');
        const readInput = document.createElement('input');
        readInput.setAttribute('type', 'checkbox');
        const readSpan = document.createElement('span');
        readSpan.classList.add('slider');

        // Add the card div deatils to the card
        bookCard.appendChild(topDiv);
        topDiv.appendChild(bookTitle);
        topDiv.appendChild(deleteButton);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readLabel);
        readLabel.appendChild(readInput);
        readLabel.appendChild(readSpan);
        
        // Add the 'read' class if readStatus = true
        if(currentBook.readStatus === true) {
            bookCard.classList.add('read');
        }
        else {
            bookCard.classList.remove('read');
        }

        // To fire changeReadStatus() when read button is clicked
        readInput.addEventListener('click', function() {
            currentBook.changeReadStatus();
        });

        // To fire removeBook() when delete button is clicked
        deleteButton.addEventListener('click', function() {
            removeBook(bookCard);
        })
}

// Modal Handling
const open = document.getElementById('open');
const modalContainer = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

function closeModal() {
    modalContainer.classList.remove('show');
}


// Called here to display the default library when the page opens
displayLibrary();




