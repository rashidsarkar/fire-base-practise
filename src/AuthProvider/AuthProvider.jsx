import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../FireBASE/firebaseConfig.JS";
const auth = getAuth(app);

export const AuthData = createContext(null);

function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const regester = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //singIn
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //on auth Change
  useEffect(() => {
    const unSubsribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setuser(currentUser);
        // ...
      } else {
        // User is signed out
        console.log("user Is Sing Out");
        // ...
      }
    });

    return () => {
      unSubsribe();
    };
  }, []);
  const contextValue = { regester, user, logIn };
  return (
    <AuthData.Provider value={contextValue}> {children}</AuthData.Provider>
  );
}

export default AuthProvider;
