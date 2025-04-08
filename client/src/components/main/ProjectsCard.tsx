import '../../../public/styles/main/ProjectsCard.css';
import { Link } from 'react-router-dom';

export default function ProjectsCard() {
    return ( 
        <div className="project-card">
            <div className="project-card-image">
                <img src="../../../public/images/projects.jpg" alt="" />
            </div>
            
            <div className="project-card-body">
                <div className="project-card-heading">
                    <h2>Motorsports</h2>
                    <button>Private Source</button>
                </div>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam scelerisque quam id
                     lorem volutpat, nec tincidunt augue elementum. Cras eget porttitor nisi. Fusce
                      malesuada laoreet orci. Donec tempus arcu ex, in vehicula ex fringilla id.
                       Sed porta suscipit orci nec blandit. Aliquam venenatis sem non nibh euismod
                        consectetur. Nulla tempor suscipit luctus. Nam eu lorem semper, egestas tortor
                </p>
                <div className="project-card-link">
                    <Link to="#">
                        Give it a try...
                    </Link>
                </div>
                
                <div className="project-card-technologies">
                    <div className="technologies-used">React</div>
                    <div className="technologies-used">Firebase</div>
                    <div className="technologies-used">Redux</div>
                </div>
                
            </div>
        </div>
    )
}