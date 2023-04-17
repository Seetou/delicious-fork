import React, { createContext, useEffect, useState } from "react";
import { API_URL } from "../assets/const/const-data";
import { auth } from "../assets/const/firbase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export const AppContext = createContext();

const GlobalContext = ({ children }) => {
  const [mostPopular, setMostPopular] = useState([]);
  const [userRequest, setUserRequest] = useState("pasta");
  const [showModal, setShowModal] = useState(false);
  const [showOverlayComponent, setShowOverlayComponent] = useState(false);

  // USER ACCOUNT CONTEXT
  const [UserDetails, setUserDetails] = useState();
  const [userIsLogged, setUserIsLogged] = useState();

  // AUTHENTICATION FUNCTIONS *********************************************************************
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logExistantUserIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logUserOut = () => {
    return signOut(auth);
  };

  const getUserDetails = () => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUserDetails(currentUser);
        setUserIsLogged(true);
      } else {
        console.log("user is not logged in");
        setUserIsLogged(false);
      }
    });
  };

  const GoogleSignIn_ = () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, [UserDetails]);

  return (
    <AppContext.Provider
      value={{
        mostPopular,
        setMostPopular,
        API_URL,
        userRequest,
        setUserRequest,
        showModal,
        setShowModal,
        createNewUser,
        logExistantUserIn,
        UserDetails,
        userIsLogged,
        setUserIsLogged,
        logUserOut,
        GoogleSignIn_,
        setShowOverlayComponent,
        showOverlayComponent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
