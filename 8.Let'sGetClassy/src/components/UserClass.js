//Creating User component using Class Based Component

import React from "react";

class UserClass extends React.Component {
    render() {
        return (
         <div className = "user-card">
             <h2>Name: Tanu</h2>
              <h3>Location: Kolkata</h3>
               <h4>Contact: @tanunest</h4>
         </div>
         )
    }
}

export default UserClass;