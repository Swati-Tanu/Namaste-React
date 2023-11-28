import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h2>This is about us page</h2>
            <h3>Using Functional Component:</h3>
            <User/>
            <h3>Using Class based Component:</h3>
            <UserClass/>
        </div>
    )
}

export default About;

