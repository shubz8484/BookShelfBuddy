import React, { useEffect } from 'react'
import { createContext,useState } from 'react';
import app from '../firebase/Firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth,signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(app);
//import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const[loading, setloading] = useState(true)

    const createUser = (email, password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginwithGoogle = ()=>{
        setloading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const login = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

const logOut = () =>{
return signOut(auth)

}



useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        // console.log(currentUser);
        setUser(currentUser);
        setloading(false);
    }) 
return () =>{
    return unsubscribe();

}

}, [])

const authInfo = { 
    user,
    createUser, 
    loginwithGoogle,
    loading,
    login,
    logOut
}

  return (
   
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
