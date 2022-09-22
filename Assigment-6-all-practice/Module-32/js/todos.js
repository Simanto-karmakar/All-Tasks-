function todoPost() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => todolists(data))
}

function todolists(todos) {
    const todoContainer = document.getElementById('todo-container')
    for (const todo of todos) {
        console.log(todo);
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        todoDiv.innerHTML = `
        <h4>userId:- ${todo.userId}</h4>
        <h5>id:- ${todo.id}</h5>
        <p>Title:- ${todo.title}</p>
        <h5>completed:- ${todo.completed}</h5>
        `;
        todoContainer.appendChild(todoDiv)
    }
}

todoPost();