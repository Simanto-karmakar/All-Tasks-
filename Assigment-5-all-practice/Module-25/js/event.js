console.log('the first');


// option:0 Directly set on the html element
// <button onclick="console.log(35)">another Batton</button>

// option:1 
// <button onclick="document.body.style.backgroundColor='yellow'">Make yellow</button>

// option 2: make red botten with function
// important:use sometime
// <button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option:3
// <button id="make-blue">Make Blue</button>
const makeBlueBatton = document.getElementById('make-blue');
makeBlueBatton.onclick = makeBlue;


function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option:3 Another 
// <button id="make-purple">Make purple</button>
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// option:4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);


function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// option:4 Another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// option:4 final
// important:use sometime
// document.getElementById('make-goldenrod').addEventListener('click', function(){})
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})