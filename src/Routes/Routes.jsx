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
import AttemptedAssignment from "../Pages/AttemptedAssignment/AttemptedAssignment";
import PendingAssignments from "../Pages/PendingAssignments/PendingAssignments";
import Contact from "../Pages/Contact Us/Contact";
import Profile from "../Pages/Profile/Profile";

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
          path: "/contact",
          element: <Contact></Contact>,
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
          path: "/pending-assignments",
          element: <PrivateRoute>
            <PendingAssignments></PendingAssignments>
          </PrivateRoute>,
        },
        {
          path: "/attempted-assignments",
          element: <PrivateRoute>
            <AttemptedAssignment></AttemptedAssignment>
          </PrivateRoute>,
        },
        {
          path: "/create-assignment",
          element: <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>,
        },
        {
          path: "/myProfile",
          element: <PrivateRoute>
            <Profile></Profile>
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