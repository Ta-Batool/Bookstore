import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


const AuthContext = createContext();
export const useAuth= ()=> {
    return useContext(AuthContext)
}
const googleProvider= new GoogleAuthProvider();
//authprovider
export const AuthProvide = ({children}) => {
    const [currentUser, setCurrentUser]= useState(null);
    const[Loading, setLoading]= useState(true);

//register a user
const registerUser = async (email, password)=>{
    return await createUserWithEmailAndPassword(auth, email, password);
}
const loginUser= async(email, password)=>{
    return await signInWithEmailAndPassword(auth, email, password)
}
// sign in with google
const signInWithGoogle= async()=>{
    return await signInWithPopup(auth, googleProvider)
}
const logout = ()=>{
    return  signOut(auth)
}
//  manage user state
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        setLoading(false);
        if(user){
            const{email, displayName, photoURL}=user;
            const userData ={
                email, username: displayName, photo : photoURL
            }
        }
    })
    return()=> unsubscribe();

}, [])
    const value= {
        currentUser,
        registerUser,
        loginUser,
        signInWithGoogle, 

        
        logout
    }
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}