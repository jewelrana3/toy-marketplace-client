import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const gooleProvider = new GoogleAuthProvider();

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,gooleProvider)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const userInfo = {
        user,
        loading,
        createUser,
        signIn,
        signInGoogle,
        logOut
    }

    useEffect(()=>{
        onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log('right user onAuthStage',currentUser);
            setLoading(false)
        })
    },[])
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;