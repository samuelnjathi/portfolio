import HomeCard from "../../components/main/HomeCard";


const homeSections = [
    {title:"About Me", image:"../../../public/images/about.jpg", content:"I'm a web developer with a strong focus on building efficient and scalable web applications. My core expertise lies in Node.js and Express.js for backend development, where I create robust APIs and handle complex server-side logic. For frontend development, I work with React to deliver interactive, user-friendly interfaces, leveraging JavaScript, HTML, and CSS to bring designs to life. I'm skilled in using PostgreSQL for database management, ensuring data is stored and retrieved with optimal performance. I also incorporate Bootstrap to streamline responsive design, making sure applications look great across all devices. I’m passionate about writing clean,  maintainable code and staying up-to-date with the latest web development trends and best practices."},
    {title:"My Projects", image:"../../../public/images/projects.jpg", content:"Throughout my career, I have worked on a diverse range of projects that showcase my skills in web development and problem-solving. From building dynamic, user-friendly websites to developing complex backend systems, each project reflects my dedication to creating high-quality, efficient solutions. Whether it's crafting responsive interfaces, optimizing database performance, or integrating advanced features, I strive to deliver results that exceed expectations. Curious to see my work? Click the button below to explore the projects I’ve completed and learn more about the impact they’ve made!"},
    {title:"Books", image:"../../../public/images/books.jpg", content:"I am an avid reader who finds inspiration and knowledge in a wide range of books. From thought-provoking non-fiction that deepens my understanding of technology, personal growth, and innovation, to gripping fiction that fuels my imagination, every book I read shapes my perspective and creativity. I enjoy exploring works on programming and software development to refine my skills, as well as diving into classic and contemporary literature that offers fresh insights into storytelling and human experiences. Through reading, I continuously broaden my horizons and draw ideas that influence both my personal and professional life. Interested in seeing how my inspirations translate into my work?"},
    {title:"Blogs", image:"../../../public/images/blog.jpg", content:"In my blogs, I share my passion for web development, covering topics that range from coding techniques and industry trends to problem-solving strategies and project insights. Whether it’s a deep dive into JavaScript frameworks, tips for optimizing performance, or lessons learned from real-world projects, my goal is to  provide valuable content for developers of all levels. Ready to dive in? Click the button below to explore my blogs and join the conversation!"}  
]

export default function Home() {
    return (
        <>
        <section className="carousel">
            <div className="img-container">
                <img src='../../public/images/header1.jpg' />
            </div>
            <div className="overlay-text">
                <h1>Welcome to my <span style={{display: "block"}}>My Website</span></h1>
            </div>
            <div className="overlay-sign">
                <h1>S.Njathi</h1>
            </div>
        </section>
        
        {homeSections.map((section, index) => (
            <HomeCard 
                id={index}
                key={index}
                title={section.title}
                image={section.image}
                content={section.content}
            />
        ))}
        
       
        </>
    )
}