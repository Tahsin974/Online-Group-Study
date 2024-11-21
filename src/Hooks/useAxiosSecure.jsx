import axios from "axios";
import useAuthContext from "../Context/useAuthContext"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
    baseURL:'https://online-group-study-server-seven.vercel.app',
    withCredentials:true
})
const useAxiosSecure = () => {
    const {setUser,logOut} = useAuthContext();
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use((res) =>{
            return res;
        },(error)=>{
            if(error.response.status == 401 || error.response.status == 403){
                logOut().then(() => {
                    setUser({});
                    navigate('/login')
                  });
            }
        })
    },[])
    
    return axiosInstance;
};

export default useAxiosSecure;
