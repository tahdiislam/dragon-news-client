import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
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

    // sign up with email and password
    const createUserWithEmailPass = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const logInWithEmailPass = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set user name 
    const setUserName = name => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
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
        <AuthContext.Provider value={{ user, signInWithProvider, logOutUser, createUserWithEmailPass, logInWithEmailPass, setUserName }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;