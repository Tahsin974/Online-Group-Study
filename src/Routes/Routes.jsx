import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Layout from "../LayOut/Layout";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import AssignmentDetails from "../Pages/AssignmentDetails/AssignmentDetails";

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
          path: "/update-assignment/:assignmentId",
          element: <UpdateAssignment></UpdateAssignment>
          ,
        },
        {
          path: "/assignment-details/:assignmentId",
          element: <PrivateRoute>
            <AssignmentDetails></AssignmentDetails>
          </PrivateRoute>,
        },
        {
          path: "/create-assignment",
          element: <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>,
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