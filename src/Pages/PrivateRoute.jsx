import { useContext } from "react";
import { AuthData } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user } = useContext(AuthData);

  return <div>{user ? children : <Navigate to="/login" />}</div>;
}

export default PrivateRoute;
