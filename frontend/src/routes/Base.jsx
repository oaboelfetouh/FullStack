import { Link, Outlet } from "react-router-dom";

export default function Base() {
    
    return (
        <>
            <nav>
                <div className="logo">
                    <Link to={"/"}>Shop</Link>
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
