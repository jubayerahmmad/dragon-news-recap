import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-lg rounded-none p-8">
      <h2 className="text-xl text-center font-bold p-4">
        Register Your Account
      </h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo Url"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
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
            placeholder="Password"
            className="input input-bordered rounded-none bg-gray-100"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-black text-white rounded-none">
            Register
          </button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Already Have An Account?{" "}
        <Link to="/auth/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
