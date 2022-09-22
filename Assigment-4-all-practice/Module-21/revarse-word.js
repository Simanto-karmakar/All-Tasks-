function revarseWords(str) {
    const words = str.split(" ");
    const result = [];

    // [ 'i', 'am', 'a', 'good', 'boy' ]
    for (let i = str.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const revarsed = result.join(" ");
    return revarsed;
}

const myString = "i am a good boy";
revarseWords(myString);
console.log();