var blogs = [];
var blogContainer = document.getElementById("blog-container");
if (blogContainer) {
    blogs.forEach(function (blog) {
        var blogPost = document.createElement('div');
        blogPost.className = 'blog-post';
        var title = document.createElement('h2');
        title.textContent = blog.title;
        var date = document.createElement('p');
        date.textContent = blog.date;
        var description = document.createElement('p');
        description.textContent = blog.description;
        var image = document.createElement('img');
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogPost.appendChild(title);
        blogPost.appendChild(date);
        blogPost.appendChild(description);
        blogPost.appendChild(image);
        blogContainer.appendChild(blogPost);
    });
}
