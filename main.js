let addBtn = document.getElementById("addBtn");
let addBookSvg = document.getElementById("addBookSvg");
function addActive(e) {
    addBookSvg.style.fill = "black";
    setTimeout(() => {
        addBookSvg.style.fill = "rgb(218, 218, 218)"
    }, 150);
}
function addHover(e) {
    addBookSvg.style.fill = "gray";
}
function removeHover(e){
    addBookSvg.style.fill = "rgb(218, 218, 218)"
}
addBtn.addEventListener("click", addActive);
addBtn.addEventListener("mouseover", addHover);
addBtn.addEventListener("mouseout", removeHover)

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return `${title}, author: ${author}, pages: ${pages}, read: ${read}`
    }
};


