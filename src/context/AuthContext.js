import { auth, db } from "../firebase";
import {signInAnonymously, signOut} from "firebase/auth"
import { createContext, useEffect, useContext } from "react";
import { doc, getDoc, updateDoc, setDoc, Timestamp } from "firebase/firestore";


export const AuthContext=createContext()

function AuthContextProvider({children}) {
  useEffect(()=>{
    if(auth.currentUser) {
      signOut()
    }
    signInAnonymously(auth).then(async()=>{
      await setDoc(doc(db,'users',auth.currentUser.uid),{'start': Timestamp.now().toMillis()})
    })
  },[])
  return ( <AuthContext.Provider value={{updateDoc, db, getDoc, doc, auth, setDoc,Timestamp}}>
    {children}
  </AuthContext.Provider> );
}

export default AuthContextProvider;