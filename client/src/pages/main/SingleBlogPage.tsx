import { useParams } from "react-router-dom"
import { BlogContext } from "../../context/BlogContext";
import { useContext } from "react";
import "../../../public/styles/main/SingleBlogPage.css"


const SingleBlogPage = () => {
  const { blogs } = useContext(BlogContext)
  const { id } = useParams();

  const blog = blogs.find(blog => blog.id === id);
  return (
    <div className="single-blog-page">
      <img src={blog?.image} alt={blog?.title} />
      <div className="blog-details">
        <h1>{blog?.title}</h1>
        <p className="date">{blog?.date}</p>
        <p className="content">{blog?.content}</p>
      </div>
    </div>
  )
}

export default SingleBlogPage