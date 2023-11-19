let addBtn = document.getElementById("addBtn");
let addBookSvg = document.getElementById("addBookSvg");
let newBook = document.getElementById("newBook");

function addHover(e) {
    addBookSvg.style.fill = "gray";
}
function removeHover(e){
    addBookSvg.style.fill = "rgb(218, 218, 218)";
}
function bookPopup(e){
    newBook.style.display = "block";
    newBook.classList.add("active");
}
function removePopup(e){
    newBook.classList.remove("active");
    setTimeout(() => {
        newBook.style.display = "none";
    }, 1000);
}
addBtn.addEventListener("mouseover", addHover);
addBtn.addEventListener("mouseout", removeHover)
addBtn.addEventListener("click", bookPopup);
document.querySelector(".close-n-book").addEventListener("click", removePopup)



function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title}, author: ${author}, pages: ${pages}, read: ${read}`
    }
};


let finishBtn = document.querySelector("#finishBtn");
let libraryContainer = document.querySelector(".library-container")
function addBook(){
    let title = document.querySelector("#inputName").value;
    let author = document.querySelector("#inputAuthor").value;
    let pages = document.querySelector("#inputPages").value;
    return new Book(title, author, pages);
};
function buildBook(Book){
    let container = document.createElement("div");
    container.setAttribute("class", "book")
    container.innerHTML = `
    <div class="info-upper">
        <div class="description">
            <p class="name">${Book.title}</p>
            <p class="author">${Book.author}</p>
            <p class="pages">${Book.pages}</p>
        </div>
        <div class="icons">
            <img src="icons/book.svg" alt="">
            <img src="icons/badge.svg" alt="">
            <img src="icons/pages.svg" alt="">
        </div>
    </div>
    <div class="btns">
        <button class="btn read">not read</button>
        <button class="btn remove">remove</button>
</div>
    `
    libraryContainer.appendChild(container);
};
finishBtn.addEventListener("click", ()=>{
    removePopup();
    buildBook(addBook());
    let btnRead = document.querySelectorAll(".btn.read");
    let btnRemove = document.querySelector(".btn.remove");
    btnRead.forEach(btn => {
        btn.addEventListener("mouseover", readHover);
        btn.addEventListener("click", changeReadStatus);
        btn.addEventListener("mouseleave", readRemoveHover);
        btnRemove.addEventListener("click", removeBook);
    });    
});



function changeReadStatus(e){
    if(e.target.classList.contains("green")){
        e.target.classList.add("white");
        e.target.classList.remove("green");
        e.target.classList.remove("hover-green");
        e.target.innerText = "not read";
    }
    else{
        e.target.classList.add("green");
        e.target.classList.remove("white");
        e.target.classList.remove("hover-white");
        e.target.innerText = "read";
    }
};
function readHover(e){
    if(e.target.classList.contains("green")){
        e.target.classList.add("hover-green");
    }
    else{
        e.target.classList.add("hover-white");
    }
};
function readRemoveHover(e){
    if(e.target.classList.contains("hover-green")){
        e.target.classList.remove("hover-green");
    }
    else{
        e.target.classList.remove("hover-white");
    }
};
function removeBook(e){
    e.target.parentNode.parentNode.remove();
};