type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [

]

const blogContainer = document.getElementById("blog-container");

if (blogContainer) {
    blogs.forEach((blog) => {
        
        const blogPost = document.createElement('div');
        blogPost.className = 'blog-post';

        const title = document.createElement('h2');
        title.textContent = blog.title;

        const date = document.createElement('p');
        date.textContent = blog.date;
        
        const description = document.createElement('p');
        description.textContent = blog.description;

        const image = document.createElement('img');
        image.src = blog.image;
        image.alt = blog.imageAlt;

        blogPost.appendChild(title);
        blogPost.appendChild(date);
        blogPost.appendChild(description);
        blogPost.appendChild(image);

        blogContainer.appendChild(blogPost);
    });

}
