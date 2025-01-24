import React from 'react';

const blogs = [
    {
        title: "Understanding React",
        description: "A deep dive into the React library and its features.",
        slug: "understanding-react",
        date: "2023-10-01",
        author: "John Doe",
        image: "https://img.freepik.com/free-photo/teamwork-making-online-blog_53876-94868.jpg"
    },
    {
        title: "JavaScript Best Practices",
        description: "Learn the best practices for writing clean and efficient JavaScript.",
        slug: "javascript-best-practices",
        date: "2023-09-15",
        author: "Jane Smith",
        image: "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg"
    },
    {
        title: "C++ Best Practices",
        description: "Learn the best practices for writing clean and efficient C++",
        slug: "C++ -best-practices",
        date: "2023-09-15",
        author: "Sagar",
        image: "https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg"
    },
    // Add more blog objects as needed
];

const BlogCard = ({ title, description, link, date, author, image }) => (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 dark:shadow-white dark:shadow-sm">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className=" text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <p className="text-gray-600 text-sm"><strong>By:</strong> {author} | <strong>Date:</strong> {date}</p>
            <a href={link} className="text-blue-500 hover:text-blue-800">
                <button className="relative inline-flex h-10 my-4 mx-0 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 px-3 py-1 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
                        Read More
                    </span>
                </button>
            </a>
        </div>
    </div>
);

const Page = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Blog's</h1>
            <div className="flex flex-wrap justify-center">
                {blogs.map(blog => (
                    <BlogCard
                        key={blog.slug}
                        title={blog.title}
                        description={blog.description}
                        link={`/blog/${blog.slug}`}
                        date={blog.date}
                        author={blog.author}
                        image={blog.image}
                    />
                ))}
            </div>
        </div>
    );
};

export default Page;
