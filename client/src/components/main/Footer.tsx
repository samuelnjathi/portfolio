import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from "react-router-dom";
import "../../../public/styles/main/Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="footer-img">
                <img src="../../../public/images/footer3.jpg" alt="Footer image" />
            </div>
            <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/about">Contact</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
            <div className="newsletter">
                <p>
                Stay inspired and informed—subscribe to our newsletter for exclusive
                insights, tips, and updates delivered straight to your inbox
                </p>
                <input type="email" />
                <button className="learn" style={{height: 35, marginTop: 20}}>Subscribe</button>
            </div>
            <div className="socials">
                <XIcon className="social" style={{ fontSize: 30 }} />
                <InstagramIcon className="social" style={{ fontSize: 30 }} />
                <FacebookIcon className="social" style={{ fontSize: 30 }} />
                <LinkedInIcon className="social" style={{ fontSize: 30 }} />
                <GitHubIcon className="social" style={{ fontSize: 30 }} />
            </div>
            
        </footer>
    );
}