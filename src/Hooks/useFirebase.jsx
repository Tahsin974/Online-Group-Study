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
  
  
  const auth = getAuth();

  const googleSignUp = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  

  }

  const setUserName = (displayName) =>{
    updateProfile(auth.currentUser, {
      displayName,
    }).then(() => {
      // Profile updated!
      // ...
    })
  }

  const userLogin = (email,password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  
  }



  
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribed = () => onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

    return unSubscribed;
  }, [auth]);

  return {
    googleSignUp,
    user,
    setUser,
    logOut,
    createUser,
    setUserName,
    userLogin
   
  };
};

export default useFirebase;
