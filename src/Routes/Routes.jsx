import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Industries from "../components/SharedPage/Industries/Industries";
import Products from "../components/SharedPage/Products/Products";
import Services from "../components/SharedPage/Services/Services";
import NewsDetails from "../components/Home/Section/NewsCard/NewsDetails";
import NewsRoom from "../components/SharedPage/NewsRoom/NewsRoom";
import Contact from "../components/SharedPage/Contact/Contact";
  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children:[
       {path:'/', element: <Home></Home>},

       {path:'INDUSTRIES', element:<Industries></Industries>},
       {path:'PRODUCTS', element: <Products></Products>},
       {path: 'SERVICES', element: <Services></Services>},
       {
        path: 'NewsDetails',
        element: <NewsDetails></NewsDetails>,
       },
       {
        path:'NEWSROOM',
        element: <NewsRoom></NewsRoom>
       },
       {
        path: 'CONTACT',
        element: <Contact></Contact>
       }
      ]
    },
  ]);