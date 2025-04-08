import { NavLink } from "react-router-dom"
import "../../../public/styles/admin/SideNav.css";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav-header">
        <h1 className="">Admin Panel</h1>
      </div>
      <div className="side-nav-links">
        <li>
            <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'side-nav-links a active' : 'side-nav-links li a')}>Dashboard</NavLink>
        </li>
        <li>
            <NavLink to="/admin/blogs" className={({ isActive }) => (isActive ? 'side-nav-links a active' : 'side-nav-links li a')}>Blogs</NavLink>
        </li>
        <li>
            <NavLink to="/admin/books" className={({ isActive }) => (isActive ? 'side-nav-links a active' : 'side-nav-links li a')}>Book Reviews</NavLink>
        </li>
        <li>
            <NavLink to="/admin/projects" className={({ isActive }) => (isActive ? 'side-nav-links a active' : 'side-nav-links li a')}>Projects</NavLink>
        </li>
        
        
        
        
      </div>
    </div>
  )
}

export default SideNav