function revarseString(text) {
    // for (let i = 0; i < text.length; i++) { }
    let revarsed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        revarsed = revarsed + element;
        console.log(element, revarsed);
    }
    return revarsed;
}

const myString = "i am a good boy";
const revarsed = revarseString(myString);
console.log(myString);