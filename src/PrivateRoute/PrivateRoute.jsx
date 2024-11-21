import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../Context/useAuthContext";

const PrivateRoute = ({children}) => {
    const location = useLocation();
    
    const {user,isLoading} = useAuthContext();
    if(isLoading){
        return <>
        <div className="min-h-screen flex justify-center">
        <span className="loading loading-ring loading-lg"></span>

        </div>
        </>
    }
    if(user?.email){
        return children
    }
    else{

        return <Navigate to='/login' state={location.pathname} ></Navigate>
    }
};

export default PrivateRoute;