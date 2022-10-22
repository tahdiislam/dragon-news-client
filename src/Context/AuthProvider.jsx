import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // sign in with popup 
    const signInWithProvider = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // log Out user 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    // sign up with email and password
    const createUserWithEmailPass = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const logInWithEmailPass = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set user name 
    const updateUserProfile = profile => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
    }

    // send email verification 
    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
        .then(() => {
        })
    }

    // load user data 
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser === null || currentUser.emailVerified){
                setUser(currentUser)
            }
            console.log(currentUser);
            setLoading(false)
        })
        return () => unsubscribe()
    },[])
    return (
        <AuthContext.Provider value={{ user, signInWithProvider, logOutUser, createUserWithEmailPass, logInWithEmailPass, updateUserProfile, loading, emailVerification, setLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;