import { useState } from "react";

// const User = (props) => {
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
    <div className = "user-card">
        <h5>Count = {count}</h5>
        <h5>Count2 = {count2}</h5>
        {/* <h2>Name: {props.name}</h2> */}
        {/* <h2>Name: Tanu</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: Kolkata</h3>
        <h4>Contact: @tanunest</h4>
    </div>
    )

}

export default User;