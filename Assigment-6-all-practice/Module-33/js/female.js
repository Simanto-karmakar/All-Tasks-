const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}



const displayUsers = users => {
    const userscontainer = document.getElementById('user-container');
    for (const user of users) {
        console.log(user);
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3>user Name:-${user.name.first} ${user.name.last}</h3>
        <p>Email:- ${user.email}</p>
        <p>user Location:-${user.location.city}, 
        Country ${user.location.country}</p>
        <p>Postcode:-${user.location.postcode}</p>
        <p>State:- ${user.location.state}</p>
        <p>Phone:- ${user.phone}</p>
        `;
        userscontainer.appendChild(userDiv);
    }
}

loadUsers();