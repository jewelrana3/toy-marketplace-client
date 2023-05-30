import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddBrainToy from "../components/AddBrainToy/AddBrainToy";
import AllToy from "../components/AllToy/AllToy";
import Blog from "../components/Blog/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'addtoy',
          element:<AddBrainToy></AddBrainToy>
        }
        ,
        {
          path:'alltoy',
          element:<AllToy></AllToy>,
          loader:()=>fetch('http://localhost:4000/addtoy')
        },{
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    },
  ]);

  export default router;