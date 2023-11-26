import { useState } from "react";
import logo from "../../images/logo.png";
import{ Link } from "react-router-dom"

export const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login")

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link> 
                    </li>
                    <li>
                        <a href="/about">About Us</a> {/*Not recommended*/}
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link> 
                    </li>
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
