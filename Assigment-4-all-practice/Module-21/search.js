const lyrics = "Tumi Bondhu Kala PaKhi Ami Jeno ki.Bosonto kale Bondhu Tomai Bolte Pari ni.Shada Shada Kala kala"

const searchString = 'pakhi';
// const doesExist =lyrics.includes("pakhi");
// const doesExist = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);

const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExist);
// console.log(doesExistOneLine);

// ------------------------------------
//   indexof

console.log(lyrics.indexOf("Kala"));
console.log(lyrics.indexOf("Tumi"));

// index e if er bavohar

if (lyrics.indexOf("Shada") !== -1) {
    console.log("exist inside the string");
}
else {
    console.log("cannot find it");
}

// startwith

console.log(lyrics.startsWith("tumi"));

// endswith
const fileName = "mybiodata.pdf";
const otherFile = "myPic.png";

console.log(fileName.endsWith(".pdf"));