import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function ProtectedRoute(){
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/register" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;