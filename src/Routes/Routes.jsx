import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
       {path:'/', element: <Home></Home>}
      ]
    },
  ]);