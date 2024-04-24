import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import cart from "./../../assets/shopping-cart.png"

export default function Login() {
    const nav = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        let user = {};
        for (let entry of form.entries()) {
            user[entry[0]] = entry[1];
        }
        if (user["userType"] == "customer") {
            nav("/");
        } else if (user["userType"] == "seller") {
            nav("/store")
        }
    }

    return (
        <>
            <div className="page-container">
                <div className="left-container">
                    <h1 className="title">Handasa Shop</h1>
                    <img src={cart} />
                </div>
                <div className="right-container">
                    <h2>Welcome back!</h2>
                    <div className="form-container">
                        <form action="/" onSubmit={handleLogin}>
                            <select name="userType" id="userType" required>
                                <option value="" selected hidden>You are a</option>
                                <option value="customer">A Customer</option>
                                <option value="seller">A Seller</option>
                            </select>
                            <input type="email" name="email" placeholder="Email" required/>
                            <input type="password" name="password" placeholder="Password" required/>
                            <button type="submit">Log in</button>
                        </form>
                        <p>Not a member yet? <Link to={"/signup"}>Register now!</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
