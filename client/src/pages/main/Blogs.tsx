import BlogCard from "../../components/main/BlogCard";
import { useContext } from "react";
import { BlogContext } from "../../context/BlogContext"
import "../../../public/styles/main/Global.css";

export default function Blogs() {
    const { blogs } = useContext(BlogContext);
    return (
        <>
         <div className="container">
        {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
        ))}
         </div>
        </>
    )
}   