// My Library 

myLibrary = [];

// Preexisting set

let preSet = [
    {
        title: "The Hobbit",
        author: "J. R. R. Tolkien",
        pages: "310",
        read: true,
    },
    {
        title: "Ulysses",
        author: "James Joyce",
        pages: "730",
        read: false,
    },
    {
        title: "Nineteen Eighty-Four",
        author: "George Orwell",
        pages: "328",
        read: true,
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J. K. Rowling",
        pages: "766",
        read: true,
    }
];

// Create Book constructor

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    if(read){
        this.isRead = "read";
    } else {
        this.isRead = "not read";
    }
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + this.isRead(read)
    }
}

// Add new book to library

function addBookToLibrary() {
    var bookTitle = document.getElementById("book-title").value;
    var bookAuthor = document.getElementById("book-author").value;
    var bookPages = document.getElementById("book-pages").value;
    var newBook = new Book(bookTitle, bookAuthor, bookPages, false);
    myLibrary.push(newBook);
    render(newBook)
    resetForm();
}

// Clear form

function resetForm() {
    document.getElementById("book-title").value = "";
    document.getElementById("book-author").value = "";
    document.getElementById("book-pages").value = "";
}


// Construct a book card

function constructBookCard(book){
    var bookCard = document.createElement("div");
    bookCard.className += "book";
    var bookHeader = document.createElement("div");
    bookHeader.className += "book__header"
    bookCard.appendChild(bookHeader);
    var bookTitle = document.createElement("h3");
    bookTitle.className += "book__title"
    bookTitle.textContent = book.title;
    bookHeader.appendChild(bookTitle);
    var bookAuthor = document.createElement("h4");
    bookAuthor.className += "book__author";
    bookAuthor.textContent = book.author;
    bookCard.appendChild(bookAuthor);
    var bookStatus = document.createElement("a");
    bookStatus.className += "book__status"
    bookCard.appendChild(bookStatus);
    var bookPages = document.createElement("span");
    bookPages.className += "book__pages";
    bookPages.textContent = book.pages;
    bookStatus.appendChild(bookPages);
    var bookIsRead = document.createElement("span");
    bookIsRead.className += "book__isread";
    bookIsRead.textContent = book.isRead;
    bookStatus.appendChild(bookIsRead);
    if(book.isRead == "read"){
        bookCard.className += " book--read";
        bookStatus.className += " book__status--read";
        bookIsRead.className += " book__isread--yes";
    } else {
        bookCard.className += " book--not-read";
        bookStatus.className += " book__status--not-read";
        bookIsRead.className += " book__isread--no";
    }
    var bookCreator = document.getElementById("book-creator");
    document.getElementById("library").insertBefore(bookCard, bookCreator);
}

// Display books cards on page

function render(book) {
    if(book === undefined){
        console.log("Rendering full library now...")
    } else {
        constructBookCard(book);
    }
}

for(i in preSet){
    var newBook = new Book(preSet[i].title, preSet[i].author, preSet[i].pages, preSet[i].read);
    render(newBook);
}