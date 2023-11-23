import { useState } from "react";
import logo from "../../images/logo.png";

// Header Component
export const Header = () => {

    // let btnName = "Login";
    
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
                        {/* {btnName} */}
                    </button>
                </ul>
            </div>
        </div>
    )
};

// export default Header;