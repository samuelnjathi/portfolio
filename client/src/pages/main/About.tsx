import "../../../public/styles/main/About.css";

export default function About() {
    return (
        <>
            <div className="grid-container">
                <div className="grid-item">
                    <h3 className="resume-title">Summary</h3>
                    <div className="resume-item">
                        <h4>Samuel Muturi Njathi</h4>
                        <p><em>Focused on building efficient, scalable web applications with expertise in Node.js, 
                            Express.js, and React, creating robust APIs, interactive interfaces, and responsive designs. 
                            Skilled in PostgreSQL for optimized database management and passionate about clean, 
                            maintainable code and modern web development practices.
                        </em></p>
                        <ul>
                            <li>Nairobi, Kenya</li>
                            <li>+254 759 067 008</li>
                            <li>samuelnjathi85@gmail.com</li>
                        </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                        <h4>Bachelor of Technology In Information and Communication Technology</h4>
                        <h5>2019 - 2024</h5>
                        <p><em>Technical University of Mombasa, Mombasa, Kenya</em></p>
                        <p>Design, development, and implementation of software, hardware, and communication systems. Combining 
                            core concepts of computer science, networking, and electronics to solve complex technological problems
                            and drive innovation in IT and communication industries.</p>
                    </div>
                </div>
                <div className="grid-item">
                    <h3 className="resume-title">Proffesional Experience</h3>
                    <div className="resume-item">
                        <h4>Junior Software Developer</h4>
                        <h5>2022 - Present</h5>
                        <p><em>SoftTech Solutions, Nairobi, Kenya</em></p>
                        <ul>
                            <li>Developed and implemented multiple web applications using Node.js, Express.js, and React</li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </>
    )
}