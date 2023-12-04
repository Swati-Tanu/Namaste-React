// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
// import {Component} from "react";

// class About extends Component{
class About extends React.Component{
    constructor(props){
        super(props);

        console.log("1. Parent Constructor")

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://dummyphoto.com"
            }
    }
}

    // We use componentDidMount to make API call, why? Refer Notes.
    async componentDidMount() {
        console.log("6. Parent Component Did Mount")

        // API call
        const data = await fetch("https://api.github.com/users/swati-tanu");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    render () {
       console.log("2. Parent Render")

       const {location, avatar_url} = this.state.userInfo
       return (
        <div>
            <h1>About Class Component</h1>
            <h2>This is about us page</h2>
            {/* <h3>Using Functional Component:</h3>
            <User name={"Tanu (function component)"}/> */}
            <h3>Using Class based Component:</h3>
            <UserClass name={"Tanu (class component)"} location={"Kolkata"}/>
            <UserClass name={"Akshay Saini (class component)"} location={"Dehradun"}/>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>Location: {location}</h2>
            <img src={avatar_url} />
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


