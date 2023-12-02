Class based component is a class that extends React.Component which has render method that returns some piece of JSX. At the end of the day, CBC is also a normal JS function.

React.Component is a class given to us by React.

#### Life Cycle of React Class based component
1. Mounted - Rendered/Loaded
Whenever a component is mounted on the web page it renders the JSX present in it. If there is any child class component, then it starts to load the child class component. A new instance of child class is created, first the constructor is called, then render is called.

We use componentDidMount to make API call in CBC like we do using useEffect in FBC. We use both these because React wants quickly render the component, then make an API call and fill the data by re-rendering the component.

