// const book1 = 3;
// const book2 = 4;
// const book3 = 5;

function paperRequiments(book1, book2, book3) {
    const book1Pages = book1 * 100;
    const book2Pages = book2 * 200;
    const book3Pages = book3 * 300;
    const totalPages = book1Pages + book2Pages + book3Pages;
    return totalPages;
}

const totalBookPage = paperRequiments(3, 4, 5);
console.log(totalBookPage);