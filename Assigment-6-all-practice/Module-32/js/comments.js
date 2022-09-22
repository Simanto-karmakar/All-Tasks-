function commentFetch() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => commentBody(data))
}

function commentBody(comments) {
    const commentContainer = document.getElementById('comments-container')
    for (const comment of comments) {
        // console.log(comment);
        const commentdiv = document.createElement('div')
        commentdiv.classList.add('comment')
        commentdiv.innerHTML = `
        <h4>Id:- ${comment.postId}</h4>
        <h5>Name:- ${comment.name}</h5>
        <h5>Email:- ${comment.email}</h5>
        <h5>Body:- ${comment.body}</h5>
        `;
        commentContainer.appendChild(commentdiv);
    }
}

commentFetch();