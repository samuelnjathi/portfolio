import BlogCard from "../../components/main/BlogCard";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext"

export default function Blogs() {
    const { blogs } = useContext(BlogContext);
    return (
        <>
        <div className="container">
                <div className="row">
                    {blogs.map(blog => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                    
                </div>
            </div>
        </>
    )
}