import Link from "next/link";

const BlogsPage = async () => {
  const response = await fetch("https://api.vercel.app/blog");
  const blogs: Blog[] = await response.json();

  return (
    <div>
      <h1>Blogs</h1>

      {blogs.map((blog, idx) => (
        <div key={idx} style={{}}>
          <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
