import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Firebase Signup
    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Firebase Signin
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // User Updated
    const updateUser = (name, photo) => {

        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // Google Signin
    const googleProvider = new GoogleAuthProvider();
    const googleSignin = () => {

        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Log Out Function
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user ovserbation
    useEffect(() => {

        const unsubscriber = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscriber
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        signUp,
        signIn,
        updateUser,
        googleSignin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.prototype = {
    // children: PropType.node.re
}


export default AuthProvider;