import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="card bg-base-100 w-full max-w-lg rounded-none p-8">
      <h2 className="text-xl text-center font-bold p-4">Login Your Account</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
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
