import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // sign in with popup 
    const signInWithProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }

    // log Out user 
    const logOutUser = () => {
        return signOut(auth)
    }

    // load user data 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
        })
        return () => unsubscribe()
    },[])
    return (
        <AuthContext.Provider value={{ user, signInWithProvider, logOutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;