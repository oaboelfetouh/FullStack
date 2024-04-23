import { Link, Outlet } from "react-router-dom";
import './base.css'

export default function Base() {
    
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to={"/"}>Shop</Link>
                </div>
                <div className="search-bar">
                    What are you looking for?
                </div>
                <div className="nav-buttons">
                    <Link to={"/cart"}>Cart</Link>
                    <Link to={"/profile"}>Profile</Link>
                    <Link to={"/logout"}>Logout</Link>
                </div>
            </nav>

            <Outlet />

            <footer>
                
            </footer>
        </>
    );
}
