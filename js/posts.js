function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
};
loadPosts();

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts')
    for (const post of posts) {
        console.log(post)
        const div = document.createElement('div');
        div.innerHTML = `
        <h2> ${post.title}</h2>
        <p>${post.body}</p>
        `;
        postsContainer.appendChild(div);

    }
}