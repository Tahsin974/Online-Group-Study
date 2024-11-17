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

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  
  const auth = getAuth();

  const googleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    setIsLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email,password) =>{
    setIsLoading(false)
    return createUserWithEmailAndPassword(auth, email, password)
    
  

  }

  const setUserName = (displayName) =>{
    setIsLoading(false);
    updateProfile(auth.currentUser, {
      displayName,
    }).then(() => {
      // Profile updated!
      
      console.log("name added")
    })
  }

  const userLogin = (email,password) =>{
    setIsLoading(false);
    return signInWithEmailAndPassword(auth, email, password)
  
  }



  
  const logOut = () => {
    setIsLoading(false);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (user) => {
      setIsLoading(true);
      if (user) {
        setUser(user);
      }
    });

    return () => unSubscribed;
  }, []);

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
