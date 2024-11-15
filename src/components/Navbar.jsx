import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.displayName}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          <img
            className="w-10 h-10 rounded-full"
            src={`${user ? user?.photoURL : userIcon}`}
            alt=""
          />
        </div>
        {user ? (
          <Link
            onClick={signOutUser}
            to="/"
            className="btn btn-neutral rounded-none"
          >
            Log Out
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
