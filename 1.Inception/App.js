const parent = React.createElement("div", 
{id: "parent"},
React.createElement("div", 
{id: "child"},),
[React.createElement("h1", 
{}, 
"I am H1 tag"), React.createElement("h2", 
{}, 
"I am H2 tag")]);

const heading = React.createElement("h1", 
{id: "heading"}, 
"Namaste Duniya from React!");

console.log(heading); //This gives us an object.
console.log(parent); //This gives us an object.

//props are children + attributes

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

root.render(parent)

//React Element (Object) => HTML (Browsers understand)