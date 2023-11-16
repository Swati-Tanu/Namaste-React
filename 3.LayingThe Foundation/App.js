import React from "react";
import ReactDOM from "react-dom";

//React Element

//1.Using Core React : React.createElement => React Element => JS Object => HTML Element (after being rendered)

// const heading = React.createElement("h1", {id: "heading"}, "Namaste Duniya!"); 

//2.Using JSX : JSX => Gets transpiled by Parcel with the help of Babel before it reaches the JS Engine. => React.createElement => => React Element => JS Object => HTML Element (after being rendered)

const num = <span>1. </span>

const heading = (<h1 
id="heading" 
className="head">
{num}
Namaste Duniya!
</h1>)

//React Component (Functional)

const Title = () => {
    return (
        <h2 className="head">Title: Namaste React!</h2>
    );
}

const message = "In love with JS!";

const HeadingComponent = () => {
    return (
    <div id="container">
        {/* Component Composition */}
        {heading}
        <Title/>
        {/* <Title></Title> */}
        {/* {Title()} */}
        <h4 className="msg">{message}</h4>
        <h3 className="heading">The React Functional Component!</h3>
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<HeadingComponent/>);