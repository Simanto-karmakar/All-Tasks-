document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
});

document.getElementById('center-btn').addEventListener('click', function () {
    const third = document.getElementById('third-friend');
    third.style.textAlign = "center";
});

document.getElementById('add-friend').addEventListener('click', function () {
    const friendsContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
<h3 class="friend-name">New Friend</h3>
<p>New friend Added</p>
`
    friendsContainer.appendChild(friend);
})

document.getElementById('center-btn').addEventListener('click', function () {
    const five = document.getElementById('five-friend');
    five.style.textAlign = "end";
})    