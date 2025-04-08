import "../../../public/styles/main/BlogCard.css";

const BlogCard = () => {
    return (
        <div className="blog-card">
            <div className="blog-card-image">
                <img src="../../public/images/blog.jpg" alt="" />
            </div>
            <div className="blog-card-body">
                <p className="blog-card-date">6th March 2025</p>
                <h2 className="blog-card-title">Blog Title</h2>
                <p className="blog-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Duis faucibus lacus dolor, et condimentum turpis gravida nec. Nam vestibulum...</p>
                
            </div>
            <button>Read More</button>  
        </div>
    )
}
export default BlogCard;