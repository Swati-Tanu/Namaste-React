Class based component is a class that extends React.Component which has render method that returns some piece of JSX. At the end of the day, CBC is also a normal JS function.

React.Component is a class given to us by React.

#### Life Cycle of React Class based component
1. Mounted - Rendered/Loaded
Whenever a component is mounted on the web page it renders the JSX present in it. If there is any child class component, then it starts to load the child class component. A new instance of child class is created, first the constructor is called, then render is called.

We use componentDidMount to make API call in CBC like we do using useEffect in FBC. We use both these because React wants quickly render the component, then make an API call and fill the data by re-rendering the component.

2. Updated

3. Unmounted

#### Following is the complete 

<---------Mounting Cycle--------->
-- Constructor
-- Render
-- HTML Dummy
-- Component Did Mount
-- API call
-- this.setState --> State variable is updated

<---------Updating Cycle---------->
-- render(API data)
-- HTML loaded with new API data
-- Component Did Update (It is called after every render/update)

<----------Unmounting Cycle-------->
-- As soon as we go to any other page Component Will Unmount will be called.

#### One major con of single page app is that when we are changing our pages since it is not reloading the page and only calling component, what happens is some methods like setTimeOut or setInterval are kept calling again and again. And one more intersting thing is if we visit the same page again then two set of same methods are called.

### This is the reason why we need to unmount!!!

The above thing happens not only in CBC but also when API is called in FBC using useEffect. So to peform unmounting in FBC we return a function in which we clear the method.