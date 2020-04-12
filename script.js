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

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true)
console.log(theHobbit.info())