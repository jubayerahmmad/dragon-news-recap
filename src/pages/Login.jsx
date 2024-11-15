import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signInUser, setUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        console.log(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setError(error.code);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-lg rounded-none p-8">
      <h2 className="text-xl text-center font-bold p-4">Login Your Account</h2>
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <p className="text-md text-red-500 font-bold">{error}</p>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white rounded-none">
            Login
          </button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Don&apos;t Have An Account?{" "}
        <Link to="/auth/register" className="text-primary">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
