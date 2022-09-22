function isJavaScriptFile(file) {
    if (file.slice(-3) == '.js') {
        return true;
    }
    else {
        return false;
    }
}

const myFiles = isJavaScriptFile('app.js');
console.log(myFiles);