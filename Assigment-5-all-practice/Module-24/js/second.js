console.log("second html");


const secondList = document.getElementById('second-list');

const li = document.createElement('li');
li.innerText = 'my denamic list';

secondList.appendChild(li);