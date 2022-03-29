let myLibrary = [];
const main = document.getElementsByClassName("main")[0];
const readToggleIconHTML = 
"<img src=\"images/menu_book_black_24dp.svg\" alt=\"Toggle Read\" height=\"24px\"/>";
const deleteIconHTML = 
"<img src=\"images/delete_black_24dp.svg\" alt=\"Toggle Read\" height=\"24px\"/>";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function refreshList(){
    let bookQueue = 0;
    main.innerHTML = "<p>Title</p><p>Author</p><p>Pages</p><p>Read</p><div></div><div></div>";
    myLibrary.forEach((book)=>{
        let bookPropQueue = 0;
        for(const property in book){
            main.innerHTML+= "<p id=\"book" + bookQueue + bookPropQueue + "\"></p>"
            const paragraph = document.getElementById("book" + bookQueue + bookPropQueue);
            paragraph.textContent = book[property];
            bookPropQueue++;
        }
        bookQueue++;
        main.innerHTML += "<button id=\"book" + bookQueue 
        + "\" onClick=\"javascript:toggleRead("+ bookQueue +")\">" 
        + readToggleIconHTML 
        + "</button>";
        main.innerHTML += "<button id=\"book" + bookQueue 
        + "\" onClick=\"javascript:deleteBookFromLibrary("+ bookQueue +")\">" 
        + deleteIconHTML 
        + "</button>";;
    });
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name="read"]:checked').value;

    console.log(title);
    if(title!==""&&author!==""&&pages!==""&&read!==null){
        const newBook = new Book(title,author,pages,read);
        myLibrary.push(newBook);
        console.log(myLibrary);
        console.log(newBook);
        console.log(read + " radio choice");

        refreshList();
    }else{
        window.alert("Please finish filling out the input fields.");
    }
}

function deleteBookFromLibrary(index) {
    myLibrary.splice((index-1), 1);
    refreshList();
}
function toggleRead(index) {
    const readStatus = myLibrary[index-1].read;
    if(readStatus === "Yes"){
        myLibrary[index-1].read = "No";
    }else if(readStatus === "No"){
        myLibrary[index-1].read = "Yes";
    }else{
        console.log("Something went horribly wrong here in the toggleRead function...");
    }
    refreshList();
}

const newBook = document.getElementById("newBook");
const deleteBook = document.getElementById("deleteBook");
const addBook = document.getElementById("addBook");

newBook.addEventListener("click", ()=>{
    const header = document.getElementById("header");
    const container = document.getElementsByClassName("grid-container")[0];
    const style = getComputedStyle(header)
    if(style.visibility==="hidden"){
        header.style.visibility = "visible";
        container.style.backgroundColor = "lightblue";
    }else{
        header.style.visibility = "hidden";
        container.style.backgroundColor = "lightgray";
    }
});

addBook.addEventListener("click", addBookToLibrary);