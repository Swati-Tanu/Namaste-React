//Creating User component using Class Based Component

import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {

        const {location} = this.props
        return (
         <div className = "user-card">
             {/* <h2>Name: Tanu</h2> */}
             <h2>Name: {this.props.name}</h2>
              {/* <h3>Location: Kolkata</h3> */}
              <h3>Location: {location}</h3>
               <h4>Contact: @tanunest</h4>
         </div>
         )
    }
}

export default UserClass;