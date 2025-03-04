import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut,signInWithEmailAndPassword,signInWithPopup,  } from 'firebase/auth';
import { auth } from '../components/fairebases/Fairebase';
export const AuthContext= createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]= useState(null)
    // console.log(user)
    const [loading,setLoaing] = useState(true);
    const creatNewUser=(email,password)=>{
        setLoaing(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const userLogin=(email,password)=>{
        setLoaing(true)
    return signInWithEmailAndPassword(auth,email,password)
    }
    
    const loginWithGoogle =(auth,provider)=>{
        setLoaing(true)
        return signInWithPopup(auth,provider)
    }
    
    const logOut=()=>{
        setLoaing(true)
        return signOut(auth)
    }
    const authInfo={
        user,
        setUser,
        creatNewUser,
       logOut,
       userLogin,
       loginWithGoogle,
       loading,
    
       }
    
       useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{ setUser(currentUser);
            setLoaing(false)
      })
      return ()=> {unsubscribe()}
       },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;