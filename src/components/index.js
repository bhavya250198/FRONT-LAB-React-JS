import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import ExpenseDetails from "./details";
import Login from "./login/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
          <div>
            <Login/>
           
          </div>
        ),
      },
    {
      path: "/home",
      element: (
        <div>
          <ExpenseDetails/>
          {/* <Link to="about">About Us</Link> */}
        </div>
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  function Routing(){
    return(
        <RouterProvider router={router}/>
    )
  }
  export default Routing;