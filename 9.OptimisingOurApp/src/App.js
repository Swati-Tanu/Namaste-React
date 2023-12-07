import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import {Header} from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Grocery from "./components/Grocery";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestaurantMenu";

const Grocery = lazy(()=>{
    import("./components/Grocery")
})

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
            path: "/",
            element: <Body/>
        },
        {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
        {
            path: "/restaurant/:resId",
            element: <RestuarantMenu/>
        }
        ],
        errorElement: <Error/>
    },
    // {
    //     path: "/about",
    //     element: <About/>
    // },
    //  {
    //     path: "/contact",
    //     element: <Contact/>
    // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter}/>)