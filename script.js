let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = function(read){
        if(read){
            return "already read."
        } else {
            return "not read yet."
        }
    }
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + this.isRead(read)
    }
}

function addBookToLibrary() {
    // code to add a new book by the user
}


function render() {
    // code to loop through myLibrary and display each item on page
}