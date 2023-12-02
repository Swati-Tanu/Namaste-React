//Creating User component using Class Based Component
import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log(props);

        // Creating State Variable using class component
        this.state = {
            count: 0,
            count2: 1
        }
    }

    render() {
        const {location} = this.props
        const {count2} = this.state

        return (
         <div className = "user-card">
            <h5>Count = {this.state.count}</h5>
            <h5>Count2 = {count2}</h5>
            <button onClick={() => {
                // Never update state variable directly as below:
                // this.state.count = this.state.count + 1 (Won't work!!!)
                this.setState({
                    count2: this.state.count2 + 1
                })

            }}>Count Increase</button>
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