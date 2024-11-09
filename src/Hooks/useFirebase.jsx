import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const auth = getAuth();


    const googleSignUp = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });

        return unSubscribed
    },[])
    
    return {
        googleSignUp,user,setUser,logOut
    }
        
    ;
};

export default useFirebase;