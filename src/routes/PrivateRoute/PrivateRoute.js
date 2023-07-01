import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[60vh] flex items-center">
        <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-700"></div>
      </div>
    );
  }
  if (!user) {
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivateRoute;
