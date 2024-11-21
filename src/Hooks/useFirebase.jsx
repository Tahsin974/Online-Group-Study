import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
 
} from "firebase/auth";
import axios from "axios";


initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  
  
  const auth = getAuth();

  const url = 'https://online-group-study-server-seven.vercel.app';
  
  

  const googleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email,password) =>{
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
    
  

  }

  const setUserName = (displayName) =>{
    
    updateProfile(auth.currentUser, {
      displayName,
    }).then(() => {
      // Profile updated!
      
      console.log("name added")
    })
  }

  const userLogin = (email,password) =>{
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  
  }



  
  const logOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email:userEmail}
      
      
      setUser(currentUser);
      setIsLoading(false);
      
      if (currentUser) {
        
        axios.post(`${url}/jwt`,loggedUser,{withCredentials:true})
        .then(res => console.log(res.data))
      }
      else{
        axios.post(`${url}/logOut`,loggedUser,{withCredentials:true})
        .then(res => console.log(res.data))
      
      }
    });

    return () => unSubscribed;
  }, [auth,user]);

  return {
    googleSignUp,
    user,
    setUser,
    logOut,
    createUser,
    setUserName,
    userLogin,
    isLoading
   
  };
};

export default useFirebase;
