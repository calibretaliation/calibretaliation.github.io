document.addEventListener("DOMContentLoaded", function() {
    loadPublications();
    loadNews();
    loadBlogs();
});

function loadPublications() {
    fetch('data/publications.json')
        .then(response => response.json())
        .then(data => {
            const publicationsDiv = document.getElementById('publications');
            data.forEach(pub => {
                const pubElement = document.createElement('p');
                pubElement.textContent = `${pub.title} - ${pub.year}`;
                publicationsDiv.appendChild(pubElement);
            });
        });
}

function loadNews() {
    fetch('data/news.json')
        .then(response => response.json())
        .then(data => {
            const newsDiv = document.getElementById('news');
            data.forEach(news => {
                const newsElement = document.createElement('div');
                newsElement.classList.add('news-item');
                newsElement.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
                newsDiv.appendChild(newsElement);
            });
        });
}

function loadBlogs() {
    fetch('data/blogs.json')
        .then(response => response.json())
        .then(data => {
            const blogsDiv = document.getElementById('blogs');
            data.forEach(blog => {
                const blogElement = document.createElement('div');
                blogElement.classList.add('blog-item');
                blogElement.innerHTML = `<h3>${blog.title}</h3><p>${blog.excerpt}</p>`;
                blogsDiv.appendChild(blogElement);
            });
        });
}