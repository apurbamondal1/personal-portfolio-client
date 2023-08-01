import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth';
import app from '../firebase/firebase.init';

export  const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [ loading,SetLoading] = useState(true);
     
    // const createUser = (email,password)=> {
    //     return createUserWithEmailAndPassword(auth,email,password)
    // }
    const User = auth.currentUser;

    useEffect( ()=>{
        const unsubscribe =onAuthStateChanged(auth,currentuser =>{
            console.log(currentuser);
            setUser(currentuser);
        });
        return () =>{
            return unsubscribe();
        }
    },[])

    const authinfo = {
        user,
        loading,
        // createUser
        User
    }
    return (
       <AuthContext.Provider value ={authinfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;