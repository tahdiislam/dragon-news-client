import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // sign in with popup 
    const signInWithProvider = (provider) => {
        return signInWithPopup(auth, provider)
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
        <AuthContext.Provider value={{ user, signInWithProvider }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;