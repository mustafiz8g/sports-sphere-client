import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // register User
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login User
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //login with google 
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    
    // forget password 
    const forgetPassword = (email) => {
        setLoading(true)
        sendPasswordResetEmail(auth, email)
    }
    
    //Update User 
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }

    // logout 
    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


 
    useEffect(() => {
      const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            console.log('current user',currentUser)
            setUser(currentUser)
            setLoading(false)

        })

        return () => {
            unSubscribe();
        }
    },[])
 

    const userInfo = {
        user,
        setUser,
        loading,
        registerUser,
        loginUser,
        forgetPassword,
        updateUser,
        logOutUser,
        loginWithGoogle

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;