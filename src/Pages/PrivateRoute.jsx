import { useContext } from "react";
import { AuthData } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loaders } = useContext(AuthData);
  const location = useLocation();
  // console.log(location);
  // console.log(user);
  if (loaders) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate state={location?.pathname} to="/login" />;
}

export default PrivateRoute;
