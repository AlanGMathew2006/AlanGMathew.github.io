var blogs = [
    {
        title: "Creating Brilliant Consulting",
        date: "Summer 2025",
        description: "Self learned Web Developer, building a scheduling app for a small tech consulting business.",
        image: "images/blog/blog-brilliant-consulting.png",
        imageAlt: "Web development project",
        slug: "creating-brilliant-consulting",
    },
    {
        title: "Joining Hack For Impact",
        date: "Fall 2025",
        description: "First year CS student at Cal Poly SLO, joining Hack For Impact to make a difference.",
        image: "images/blog/hack-for-impact.png",
        imageAlt: "Hack For Impact event",
        slug: "joining-hack-for-impact",
    },
];
var blogContainer = document.getElementById("blog-container");
//Logic for creating and appending blog elements
if (blogContainer) {
    blogs.forEach(function (blog) {
        var blogPost = document.createElement("div");
        blogPost.className = "blog-post";
        // Make the blog post clickable - use the slug to create URL
        blogPost.style.cursor = "pointer";
        blogPost.addEventListener("click", function () {
            // Navigate to individual blog page using the slug
            window.location.href = "blogs/".concat(blog.slug, ".html");
        });
        var title = document.createElement("h2");
        title.textContent = blog.title;
        var date = document.createElement("p");
        date.textContent = blog.date;
        date.className = "blog-date";
        var description = document.createElement("p");
        description.textContent = blog.description;
        description.className = "blog-description";
        var image = document.createElement("img");
        image.src = blog.image;
        image.alt = blog.imageAlt;
        blogPost.appendChild(title);
        blogPost.appendChild(date);
        blogPost.appendChild(description);
        blogPost.appendChild(image);
        blogContainer.appendChild(blogPost);
    });
}
