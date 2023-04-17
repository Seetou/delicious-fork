import React from "react";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../Components/GlobalContext";

const ProtectedRoute = ({ children }) => {
  const { userIsLogged } = useContext(AppContext);
  if (!userIsLogged) {
    console.log("redirection");
    return <Navigate to={"/"} />;
  }
  return children;
};

export default ProtectedRoute;
