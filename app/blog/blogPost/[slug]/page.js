// const blog = {
//     author: "John Doe",
//     description: "This is a sample blog post.",
//     date: "2023-10-01",
//     content: "<p>This is the HTML content of the blog post.</p>"
// };

export default async function Page({ params }) {
    // const slug = (await params).slug
    const blog = {
        title: "Hindi Sikho",
        author: "John Doe",
        description: "This is a sample blog post description.",
        date: "2023-10-01T12:00:00Z",
        content: "<p>This is the content of the blog post. It can include <strong>HTML</strong> elements.</p>"
        };
    return (
        // This HTML code utilizes the Tailwind CSS framework to create a horizontally centered div container with a maximum width of 720px.
        <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <blockquote className="text-gray-600 italic border-l-4 border-gray-400 pl-4">
  {blog.description}
</blockquote>
            <div className="flex gap-2">
            <p className="text-gray-400 italic">By {blog.author}</p>
            <p className="text-gray-400">{new Date(blog.date).toLocaleDateString()}</p>
            </div>
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
    )
}