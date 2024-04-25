import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./base.css";
import DarkModeToggle from "../ui/DarkModeToggle";

export default function Base(props) {
  const nav = useNavigate();

  useEffect(() => {
    //nav('/login')
  });

  return (
    <>
      <nav>
        <div className="logo">
          <Link to={props.userType == "customer" ? "/" : "/store/"}>LOGO</Link>
        </div>
        <div className="search-bar">
          {props.userType == "customer"
            ? "What are you looking for?"
            : "Search your products"}
        </div>

        <div className="nav-buttons">
          <DarkModeToggle></DarkModeToggle>
          {props.userType == "customer" && <Link to={"/cart"}>Cart</Link>}
          <Link
            to={props.userType == "customer" ? "/profile" : "/store/profile"}
          >
            Profile
          </Link>
          <Link to={"/login"}>Logout</Link>
        </div>
      </nav>

      <Outlet />

      <footer></footer>
    </>
  );
}
