#### We have React Element which is equilvalent to DOM element. Eg; createElement.

React.createElement => => React Element => JS Object => HTML Element (after being rendered)

React elements create an object therefore it is an object. It is not an HTNL Element. When we render the React Element on the DOM then it becomes HTML Element.

#### However, using just core React to create elements is not the best way as it makes the code very clumsly and not readable. Therefore, JSX was created.

JSX is a JS syntax which is easier to create React element. JSX is neither a part of React. Nor is JSX HTML inside JS. JSX is an HTML/XML like syntax. Since JSX is not a valid pure JS therefore JS Engines cannot read JSX and Browsers don't understand it. Actually parcel, with the help of a JavaScript transcompiler/compiler package called Babel, transpile the code before it goes to JS Engine.

JSX => Gets transpiled by Parcel with the help of Babel before it reaches the JS Engine. => React.createElement => => React Element => JS Object => HTML Element (after being rendered)

To give an attribute in JSX we have to use camel case, eg; className.

When writing multiple line codes in JSX use ().

#### React Component: Everything in react is a component.

There are two types of components:
1. Class Based Component (Old way)
2. Functional Component (New Way) : A normal JS function which returns some JSX element. Always name it with a capital letter.



