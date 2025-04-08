import { Link } from "react-router-dom";
import "../../../public/styles/admin/TopNav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
        <div className="menu">
            <Link to="" className="top-nav-button">
                Logout
            </Link>
        </div>
       
    </div>
  )
}

export default TopNav