import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../FireBASE/firebaseConfig.JS";
const auth = getAuth(app);

export const AuthData = createContext(null);

function AuthProvider({ children }) {
  const [user, setuser] = useState(null);
  const [loaders, setLoaders] = useState(true);
  const regester = (email, password) => {
    setLoaders(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //singIn
  const logIn = (email, password) => {
    setLoaders(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //sing out
  const logOut = () => {
    setLoaders(true);
    signOut(auth).then().catch();
  };
  //on auth Change
  useEffect(() => {
    const unSubsribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
      setLoaders(false);
    });

    return () => {
      unSubsribe();
    };
  }, []);
  const contextValue = {
    regester,
    user,
    logOut,
    loaders,
    logIn,
  };
  return (
    <AuthData.Provider value={contextValue}> {children}</AuthData.Provider>
  );
}

export default AuthProvider;
