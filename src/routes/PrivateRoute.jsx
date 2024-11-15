import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return (
    <div>
      <Navigate to="/auth/login"></Navigate>
    </div>
  );
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
