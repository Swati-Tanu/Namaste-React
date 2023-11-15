import React from "react";
import ReactDOM from "react-dom";

//React Element

//1.Using Core React : React.createElement => React Element => JS Object => HTML Element (after being rendered)

// const heading = React.createElement("h1", {id: "heading"}, "Namaste Duniya!"); 

//2.Using JSX : JSX => Gets transpiled by Parcel with the help of Babel before it reaches the JS Engine. => React.createElement => => React Element => JS Object => HTML Element (after being rendered)

const heading = (<h1 
id="heading" 
className="head">
Namaste Duniya!
</h1>)

//React Component (Functional)
const HeadingComponent = () => {
    return <h1>The React Functional Component!</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);