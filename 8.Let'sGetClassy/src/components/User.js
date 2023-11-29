// const User = (props) => {
const User = ({name}) => {
    return (
    <div className = "user-card">
        {/* <h2>Name: {props.name}</h2> */}
        {/* <h2>Name: Tanu</h2> */}
        <h2>Name: {name}</h2>
        <h3>Location: Kolkata</h3>
        <h4>Contact: @tanunest</h4>
    </div>
    )

}

export default User;