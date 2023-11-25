import { useState } from "react";
import logo from "../../images/logo.png";

export const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                    className="login" 
                    onClick={()=>{
                        // btnName = "Logout"
                        btnNameReact === "Login" ? setbtnNameReact("Logout") :
                        setbtnNameReact("Login")
                        }}
                    >
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    )
};
