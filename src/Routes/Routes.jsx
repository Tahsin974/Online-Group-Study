import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Layout from "../LayOut/Layout";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";

 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/assignments",
          element: <Assignments></Assignments>,
        },
        {
          path: "/create-assignment",
          element: <CreateAssignment></CreateAssignment>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/registration",
          element: <Registration></Registration>,
        }
      ]
    }
    
  ]);
  export default router;