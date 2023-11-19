import React from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header"
import Body from "./components/Body"

// Main Container of the App
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);