In VS Code, rafce is shortcut to create a component.

#### useEffect() will be called every time the component(inside which we use useEfffect) is rendered. But since there is a dependancy array(which is not mandatory) in the parameter of useEffect(), so it changes the behavior of it's render.

If no dependancy array => useEffect is called on every component render.

If dependancy array is empty eg;[] => useeffect is called on initial render and just once.

If dependancy array is not empty eg;[btnNameReact] => useeffect is called every time btnNameReact is updated.

#### Never create useState() outside of the component.

Why is throws an error? Beacuse the purpose of useState() is to create Local State Variables inside the functional component.

Always create useState() on the top!

Never create useState() inside a if-else/function! 

### Routing
In order to execute routing we import three components from react-router-dom; createBrowserRouter, Outlet and RouterProvider

createBrowserRouter helps us create different routes.
RouterProvider provides the routing config to our app.

Outlet (a component) is kind of a tunnel that let the children in it according to the path.

How to identify a React hook? 
If the name starts with the word "use", it's a hook.

react-router-dom gives us access to an important hook called useRouteError. It gives more information about the error.

When using React, to link a page don't use anchor tag as it reload the whole page and it makes our app slow. So what do we do? Use Link component from react-router-dom. By using Link it won't refresh the whole page and it will give a smooth experience as well.

#### That is why we call it single page app, even if we change the route only components changes and not the whole page!!!

There are two types of Routing in web application:
1. Client Side Routing: This app is the example of this. We get the data loaded in the very first time we load the app and after that no network call is make. It just loads different components.
2. Server Side Routing: Make a network call and the server sends the whole page and gets rendered on the UI.


