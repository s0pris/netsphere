// Sample data for blog posts (you can replace it with real data from a database or API)
const postsData = [
    { title: "First Post", content: "This is the content of the first post." },
    { title: "Second Post", content: "This is the content of the second post." },
    { title: "Third Post", content: "This is the content of the third post." }
];

// Function to display blog posts
function displayPosts() {
    const postsSection = document.getElementById('posts');

    postsData.forEach(post => {
        const postElement = document.createElement('article');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        postsSection.appendChild(postElement);
    });
}

// Call the function to display posts when the page loads
window.onload = displayPosts;
