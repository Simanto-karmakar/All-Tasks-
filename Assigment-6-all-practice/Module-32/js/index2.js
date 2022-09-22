function loadUser3() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => showDisplay(data))
}

function showDisplay(data) {
    const ul = document.getElementById('load-list');
    for (const user of data) {
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}