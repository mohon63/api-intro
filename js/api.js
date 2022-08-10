function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data.title))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
};

function displayUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerText = `My name is ${user.name}.Here is my Email: ${user.email}.
        `;
        ul.appendChild(li);
    }
}
