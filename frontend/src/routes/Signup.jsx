import { Link, useNavigate } from "react-router-dom";
import "./login.css"
import cart from "./../../assets/shopping-cart.png"

export default function Signup() {
    const nav = useNavigate();
    const handleSignup = (event) => {
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
                    <h2>Sign Up</h2>
                    <div className="form-container">
                        <form action="/" onSubmit={handleSignup}>
                            <select name="userType" id="userType" required>
                                <option value="" selected hidden>How will you use this account?</option>
                                <option value="customer">As a Customer</option>
                                <option value="seller">As a Seller</option>
                            </select>
                            <input name="username" type="text" placeholder="Username" required/>
                            <input name="email" type="email" placeholder="Email" required/>
                            <input name="password" type="password" placeholder="Password" required/>
                            <input type="password" placeholder="Confirm password" required/>
                            <select name="city" id="" required>
                                <option value="" selected hidden>City</option>
                                <option value="Cairo">Cairo</option>
                                <option value="Alex">Alex</option>
                            </select>
                            <textarea name="address" rows="1" placeholder="Address"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    <p>Already a member? <Link to={"/login"}>Log-in here.</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
}
