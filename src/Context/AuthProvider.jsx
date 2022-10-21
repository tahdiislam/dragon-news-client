import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth"
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const user = {displayName: 'Moin Ali'}

    // sign in with popup 
    const signInWithProvider = (provider) => {
        return signInWithPopup(auth, provider)
    }
    return (
        <AuthContext.Provider value={{ user, signInWithProvider }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;