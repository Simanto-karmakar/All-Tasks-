var booksPrice = [100, 200, 234, 690, 50, 270, 60, 30, 75, 90, 150];

for (i = 0; i < booksPrice.length; i++) {
    if (booksPrice[i] > 200) {
        continue;
    }
    console.log(booksPrice[i]);
}