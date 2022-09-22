function albumsAdded() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAdd(data))
}

function displayAdd(albums) {
    const albumsContainer = document.getElementById('albums-container')
    for (const album of albums) {
        console.log(album);
        const albumDiv = document.createElement('div')
        albumDiv.classList.add('album')
        albumDiv.innerHTML = `
        <h4>userId:- ${album.userId}</h4>
        <h5>Id:- ${album.id}</h5>
        <p>Title:- ${album.title}</p>
        `;
        albumsContainer.appendChild(albumDiv);
    }
}

albumsAdded();