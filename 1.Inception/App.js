const heading = React.createElement("h1", 
{id: "heading"}, 
"Namaste Duniya from React!");

console.log(heading); //This gives us an object.

//props are children + attributes

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);