// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
// import {Component} from "react";

// class About extends Component{
class About extends React.Component{
    constructor(props){
        super(props);

        console.log("1. Parent Constructor")
    }

    // We use componentDidMount to make API call, why? Refer Notes.
    componentDidMount() {
        console.log("6. Parent Component Did Mount")

        // API call
    }

    render () {
       console.log("2. Parent Render")
       return (
        <div>
            <h1>About Class Component</h1>
            <h2>This is about us page</h2>
            {/* <h3>Using Functional Component:</h3>
            <User name={"Tanu (function component)"}/> */}
            <h3>Using Class based Component:</h3>
            <UserClass name={"Tanu (class component)"} location={"Kolkata"}/>
            <UserClass name={"Akshay Saini (class component)"} location={"Dehradun"}/>
        </div>
       )
    }
}

/* 
1. Parent Constructor
2. Parent Render
    -Tanu (class component)3. Child Constructor
    -Tanu (class component)4. Child Render

    -Akshay Saini (class component)3. Child Constructor
    -Akshay Saini (class component)4. Child Render

DOM updated in single render

    -Tanu (class component)5. Child Component Did Mount
    -Akshay Saini (class component)5. Child Component Did Mount
    
6. Parent Component Did Mount
*/

// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is about us page</h2>
//             {/* <h3>Using Functional Component:</h3>
//             <User name={"Tanu (function component)"}/> */}
//             <h3>Using Class based Component:</h3>
//             <UserClass name={"Tanu (class component)"} location={"Kolkata"}/>
//         </div>
//     )
// }

export default About;


