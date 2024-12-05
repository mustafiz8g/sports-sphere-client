import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);




const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    // register 
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // forget password 
    const forgetPassword = (email) => {
        setLoading(true)
        sendPasswordResetEmail(auth, email)
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
        loading,
        registerUser,
        loginUser,
        forgetPassword,
        logOutUser,
       

    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;